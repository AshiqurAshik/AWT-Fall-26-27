import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsInt,
  Min,
  Max,
  Matches,
  IsIn,
  IsOptional,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  fullName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        "Password must contain uppercase, lowercase, number, and special character",
    }
  )
  password!: string;

  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "Phone must be exactly 11 digits and start with 01",
  })
  phone!: string;

  @IsString()
  @IsIn(["student", "teacher"])
  accountType!: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}