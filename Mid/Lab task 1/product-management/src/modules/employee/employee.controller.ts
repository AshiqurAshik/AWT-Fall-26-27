import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Controller("employees")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployees() {
    return await this.employeeService.getEmployees();
  }

  @Get(":id")
  async getEmployee(@Param("id") id: string) {
    return await this.employeeService.getEmployee(id);
  }

  @Post()
  async createEmployee(@Body() dto: CreateEmployeeDto) {
    return await this.employeeService.createEmployee(dto);
  }

  @Patch(":id")
  async updateEmployee(@Param("id") id: string, @Body() dto: UpdateEmployeeDto) {
    return await this.employeeService.updateEmployee(id, dto);
  }

  @Delete(":id")
  async deleteEmployee(@Param("id") id: string) {
    return await this.employeeService.deleteEmployee(id);
  }
}