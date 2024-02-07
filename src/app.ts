import express, { Request, Response, NextFunction } from "express";
import IController from "./interfaces/controller.interface";
import {config} from "dotenv";
import mongoose from "mongoose";

export default class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IController[], port: number) {
    config();
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private loggerMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    console.log(`${request.method} ${request.path}`);
    next();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(this.loggerMiddleware);
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    const {MONGO_URI, MONGO_DB, PORT} = process.env;
    mongoose.connect(MONGO_URI!, {dbName: MONGO_DB})

    mongoose.connection.on("connecion",() => {
      console.log("connected");
      this.initializeMiddlewares();
      this.app.listen(`listening ${PORT}`);
    })
    
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
