import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @Column({ type: "float" })
  price!: number;

  @Column({ type: "int" })
  quantity!: number;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}