

export class CreateEmployeeDto {constructor() { CreateEmployeeDto.prototype.__init.call(this);CreateEmployeeDto.prototype.__init2.call(this);CreateEmployeeDto.prototype.__init3.call(this);CreateEmployeeDto.prototype.__init4.call(this);CreateEmployeeDto.prototype.__init5.call(this);CreateEmployeeDto.prototype.__init6.call(this);CreateEmployeeDto.prototype.__init7.call(this);CreateEmployeeDto.prototype.__init8.call(this); }
  IsNotEmpty()
  __init() {this.name = ""}

  IsNotEmpty()
  __init2() {this.email = ""}

  IsNotEmpty()
  __init3() {this.phone = ""}

  IsNotEmpty()
  __init4() {this.password = ""}

  IsNotEmpty()
  @IsInt()
  __init5() {this.age = 0}

  IsNotEmpty()
  @IsInt()
  __init6() {this.yearsOfWorking = 0}

  IsOptional()
  __init7() {this.created_at = new Date()}

  IsOptional()
  __init8() {this.updated_at = new Date()}
}

export class UpdateEmployeeDto {constructor() { UpdateEmployeeDto.prototype.__init9.call(this);UpdateEmployeeDto.prototype.__init10.call(this);UpdateEmployeeDto.prototype.__init11.call(this);UpdateEmployeeDto.prototype.__init12.call(this);UpdateEmployeeDto.prototype.__init13.call(this);UpdateEmployeeDto.prototype.__init14.call(this);UpdateEmployeeDto.prototype.__init15.call(this);UpdateEmployeeDto.prototype.__init16.call(this); }
  IsOptional()
  __init9() {this.name = ""}

  IsOptional()
  __init10() {this.email = ""}

  IsOptional()
  __init11() {this.phone = ""}

  IsOptional()
  __init12() {this.password = ""}

  IsOptional()
  @IsInt()
  __init13() {this.age = 0}

  IsOptional()
  @IsInt()
  __init14() {this.yearsOfWorking = 0}

  IsOptional()
  __init15() {this.created_at = new Date()}

  IsOptional()
  __init16() {this.updated_at = new Date()}
}