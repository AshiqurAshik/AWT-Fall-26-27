import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employees" })
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column({ type: "int" })
  age!: number;

  @Column({ type: "int" })
  yearsOfWorking!: number;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}