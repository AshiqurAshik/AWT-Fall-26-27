import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entities/employee.entity";
import { Repository } from "typeorm";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";


@Injectable()
export class EmployeeService {
constructor(
  @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>,
) {}

async getEmployees() {
try {
  const employees = await this.employeeRepository.find();
  return employees;}
  catch (error) {
    throw error;
}
}

async getEmployee(id: string) {
try {
  const employee = await this.employeeRepository.findOne({ where: { id:id } });
  if (!employee) {
    throw new NotFoundException("Employee with ID not found");
  }
  return employee;}
  catch (error) {
    throw error;
}
}

async createEmployee(dto: CreateEmployeeDto) {
try{
  const responce = await this.employeeRepository.create(dto);
  return await this.employeeRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateEmployee(id: string, dto: UpdateEmployeeDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Employee with ID not found");
    }
    const employee = await this.employeeRepository.findOne({ where: { id:id } });
    if (!employee) {
      throw new NotFoundException("Employee with ID not found");
    }
    Object.assign(employee, dto);
    const {id: eid, ...rest}=employee;
    return await this.employeeRepository.update({id:id}, rest);
  }
  catch(error){
    throw error;
  }
}

async deleteEmployee(id: string) {
  try{
  const employee = await this.employeeRepository.findOne({ where: { id:id } });
if (!employee) {
  throw new NotFoundException("Employee with ID not found");
}
return await this.employeeRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}