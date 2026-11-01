


@Injectable()
export class RegistrationService {

  async registerUser(dto) {
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