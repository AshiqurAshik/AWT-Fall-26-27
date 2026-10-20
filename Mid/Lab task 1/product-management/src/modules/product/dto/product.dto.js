

export class CreateProductDto {constructor() { CreateProductDto.prototype.__init.call(this);CreateProductDto.prototype.__init2.call(this);CreateProductDto.prototype.__init3.call(this);CreateProductDto.prototype.__init4.call(this);CreateProductDto.prototype.__init5.call(this);CreateProductDto.prototype.__init6.call(this); }
  IsNotEmpty()
  __init() {this.name = ""}

  IsNotEmpty()
  __init2() {this.category = ""}

  IsNotEmpty()
  @IsNumber()
  __init3() {this.price = 0}

  IsNotEmpty()
  @IsInt()
  __init4() {this.quantity = 0}

  IsOptional()
  __init5() {this.created_at = new Date()}

  IsOptional()
  __init6() {this.updated_at = new Date()}
}

export class UpdateProductDto {constructor() { UpdateProductDto.prototype.__init7.call(this);UpdateProductDto.prototype.__init8.call(this);UpdateProductDto.prototype.__init9.call(this);UpdateProductDto.prototype.__init10.call(this);UpdateProductDto.prototype.__init11.call(this);UpdateProductDto.prototype.__init12.call(this); }
  IsOptional()
  __init7() {this.name = ""}

  IsOptional()
  __init8() {this.category = ""}

  IsOptional()
  @IsNumber()
  __init9() {this.price = 0}

  IsOptional()
  @IsInt()
  __init10() {this.quantity = 0}

  IsOptional()
  __init11() {this.created_at = new Date()}

  IsOptional()
  __init12() {this.updated_at = new Date()}
}