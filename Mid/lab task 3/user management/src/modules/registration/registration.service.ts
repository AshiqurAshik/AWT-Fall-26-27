import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/registration.dto";

@Injectable()
export class RegistrationService {

  async registerUser(dto: CreateUserDto) {
    try {
      const response = {
        message: "User registered successfully!",
        user: {
          fullName: dto.fullName,
          email: dto.email,
          age: dto.age,
          accountType: dto.accountType,
        },
      };

      return response;
    } catch (error) {
      throw error;
    }
  }
}