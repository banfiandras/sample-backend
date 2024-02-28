import { Schema, model } from "mongoose";
import IUser from "./user.interface";

// If you have declared _id field explicitly in schema, you must initialize it explicitly
// If you have not declared it in schema, MongoDB will declare and initialize it

const userSchema = new Schema<IUser>(
  {
    name: String,
    email: String,
    password: String,
  },
  { versionKey: false }
);

const userModel = model<IUser>("User", userSchema);

export default userModel;
