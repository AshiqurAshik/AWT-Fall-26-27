import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "Registrations" })
export class Registration {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "int" })
  age!: number;

  @Column({ length: 11 })
  phone!: string;

  @Column({
    type: "enum",
    enum: ["student", "teacher"],
  })
  accountType!: string;

  @Column({ type: "varchar", nullable: true })
  address?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}