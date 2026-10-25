







export class CreateAdminDto {constructor() { CreateAdminDto.prototype.__init.call(this);CreateAdminDto.prototype.__init2.call(this);CreateAdminDto.prototype.__init3.call(this);CreateAdminDto.prototype.__init4.call(this);CreateAdminDto.prototype.__init5.call(this);CreateAdminDto.prototype.__init6.call(this); }
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
  @IsInt()
  __init4() {this.role = 0}

  IsOptional()
  __init5() {this.created_at = new Date()}

  IsOptional()
  __init6() {this.updated_at = new Date()}
}

export class UpdateAdminDto {
  IsOptional()
  @IsString()
  

  IsOptional()
  @IsEmail()
  

  IsOptional()
  @IsString()
  

  IsOptional()
  @IsInt()
  

  IsOptional()
  

  IsOptional()
  
}