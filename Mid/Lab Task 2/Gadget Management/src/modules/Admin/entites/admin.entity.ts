import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "admins" })
export class Admin {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

 @Column()
  password!: string;

  @Column()
  role!: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}
