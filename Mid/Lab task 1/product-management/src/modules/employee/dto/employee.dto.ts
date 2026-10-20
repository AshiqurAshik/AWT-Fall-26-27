import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  phone: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  @IsInt()
  age: number = 0;

  @IsNotEmpty()
  @IsInt()
  yearsOfWorking: number = 0;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateEmployeeDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  email: string = "";

  @IsOptional()
  phone: string = "";

  @IsOptional()
  password: string = "";

  @IsOptional()
  @IsInt()
  age: number = 0;

  @IsOptional()
  @IsInt()
  yearsOfWorking: number = 0;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}