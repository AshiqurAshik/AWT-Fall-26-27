






export class CreateUserDto {constructor() { CreateUserDto.prototype.__init.call(this);CreateUserDto.prototype.__init2.call(this);CreateUserDto.prototype.__init3.call(this);CreateUserDto.prototype.__init4.call(this);CreateUserDto.prototype.__init5.call(this);CreateUserDto.prototype.__init6.call(this);CreateUserDto.prototype.__init7.call(this); }
  IsNotEmpty()
  @IsString()
  __init() {this.name = ""}

  IsNotEmpty()
  @IsEmail()
  __init2() {this.email = ""}

  IsNotEmpty()
  @IsString()
  __init3() {this.password = ""}

  IsNotEmpty()
  @IsString()
  __init4() {this.address = ""}

  IsNotEmpty()
  @IsString()
  __init5() {this.role = ""}

  IsOptional()
  __init6() {this.created_at = new Date()}

  IsOptional()
  __init7() {this.updated_at = new Date()}
}

export class UpdateUserDto {
  IsOptional()
  @IsString()
  

  IsOptional()
  @IsEmail()
  

  IsOptional()
  @IsString()
  

  IsOptional()
  @IsString()
  

  IsOptional()
  @IsString()
  

  IsOptional()
  

  IsOptional()
  
}