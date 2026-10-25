import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  name: string = "";

  @IsNotEmpty()
  @IsEmail()
  email: string = "";

  @IsNotEmpty()
  @IsString()
  password: string = "";

  @IsNotEmpty()
  @IsInt()
  role: number = 0;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateAdminDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsInt()
  role?: number;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;
}