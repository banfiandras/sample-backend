import { IsOptional, IsString, IsMongoId } from "class-validator";
import CreateAddressDto from "./address.dto";
import { Schema } from "mongoose";

export default class CreateUserDto {
  // @IsString()
  // public firstName: string;

  // @IsString()
  // public lastName: string;

  @IsMongoId()
  @IsOptional()
  public _id: Schema.Types.ObjectId;

  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  // @IsOptional()
  // @ValidateNested()
  // public address?: CreateAddressDto;
}
