







@Entity({ name: "Registrations" })
export class Registration {
  PrimaryGeneratedColumn("uuid")
  

  Column()
  

  Column({ unique: true })
  

  Column()
  

  Column({ type: "int" })
  

  Column({ length: 11 })
  

  Column({
    type: "enum",
    enum: ["student", "teacher"],
  })
  

  Column({ type: "varchar", nullable: true })
  

  CreateDateColumn()
  

  UpdateDateColumn()
  
}