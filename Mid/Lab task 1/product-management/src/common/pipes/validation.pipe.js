import {



  BadRequestException,
} from "@nestjs/common";
import { validate, } from "class-validator";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ValidationPipe  {
  constructor(
     options = {
      whitelist: true,
      forbidNonWhitelisted: true,
    },
  ) {;this.options = options;}
  async transform(value, { metatype }) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object, this.options);
    if (errors.length > 0) {
      throw new BadRequestException("Bad Request Payload");
    }
    return object;
  }

   toValidate(metatype) {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
