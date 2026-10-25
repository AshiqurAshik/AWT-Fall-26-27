import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id: string) {
    try {
      const user = await this.userRepository.findOne({ where: { id: id } });

      if (!user) {
        throw new NotFoundException("User with ID not found");
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(dto: CreateUserDto) {
    try {
      const response = this.userRepository.create(dto);
      return await this.userRepository.save(response);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    try {
      if (!id) {
        throw new NotFoundException("User with ID not found");
      }

      const user = await this.userRepository.findOne({ where: { id: id } });

      if (!user) {
        throw new NotFoundException("User with ID not found");
      }

      Object.assign(user, dto);

      const { id: uid, ...rest } = user;

      return await this.userRepository.update({ id: id }, rest);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.userRepository.findOne({ where: { id: id } });

      if (!user) {
        throw new NotFoundException("User with ID not found");
      }

      return await this.userRepository.delete({ id: id });
    } catch (error) {
      throw error;
    }
  }
}
