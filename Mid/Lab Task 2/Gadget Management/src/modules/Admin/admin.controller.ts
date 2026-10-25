
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto, UpdateAdminDto } from "./dto/admin.dto";

@Controller("admins")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAdmins() {
    return await this.adminService.getAdmins();
  }

  @Get(":id")
  async getAdmin(@Param("id") id: string) {
    return await this.adminService.getAdmin(id);
  }

  @Post()
  async createAdmin(@Body() dto: CreateAdminDto) {
    return await this.adminService.createAdmin(dto);
  }

  @Patch(":id")
  async updateAdmin(
    @Param("id") id: string,
    @Body() dto: UpdateAdminDto,
  ) {
    return await this.adminService.updateAdmin(id, dto);
  }

  @Delete(":id")
  async deleteAdmin(@Param("id") id: string) {
    return await this.adminService.deleteAdmin(id);
  }
}
