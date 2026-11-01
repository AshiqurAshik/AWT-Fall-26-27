













export class CreateUserDto {
  IsString()
  @IsNotEmpty()
  @MinLength(3)
  

  IsEmail()
  @IsNotEmpty()
  

  IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        "Password must contain uppercase, lowercase, number, and special character",
    }
  )
  

  IsInt()
  @Min(18)
  @Max(60)
  

  IsString()
  @Matches(/^01\d{9}$/, {
    message: "Phone must be exactly 11 digits and start with 01",
  })
  

  IsString()
  @IsIn(["student", "teacher"])
  

  IsOptional()
  @IsString()
  @MinLength(10)
  
}