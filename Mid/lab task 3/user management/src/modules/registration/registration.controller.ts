import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/registration.dto";

@Controller("users")
export class RegistrationController {

  @Post("register")
  async registerUser(@Body() dto: CreateUserDto) {
    return {
      message: "User registered successfully!",
      user: {
        fullName: dto.fullName,
        email: dto.email,
        age: dto.age,
        accountType: dto.accountType,
      },
    };
  }
}