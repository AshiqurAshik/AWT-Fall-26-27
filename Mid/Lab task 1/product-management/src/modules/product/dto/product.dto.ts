import { IsInt, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  category: string = "";

  @IsNotEmpty()
  @IsNumber()
  price: number = 0;

  @IsNotEmpty()
  @IsInt()
  quantity: number = 0;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateProductDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  category: string = "";

  @IsOptional()
  @IsNumber()
  price: number = 0;

  @IsOptional()
  @IsInt()
  quantity: number = 0;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}