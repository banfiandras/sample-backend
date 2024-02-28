import { Schema } from "mongoose";

export default interface IUser {
  // _id: string;
  // firstName: string;
  // lastName: string;
  // fullName: string;
  // email: string;
  // password: string | undefined;
  // address?: {
  //   street: string;
  //   city: string;
  // };
  _id?: Schema.Types.ObjectId,
  name: string;
  email: string;
  password: string | undefined;
}
