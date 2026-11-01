import { Table } from "typeorm";

export class CreateUserTable1792420194034
  
{
   async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "fullName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "age",
            type: "int",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            length: "11",
            isNullable: false,
          },
          {
            name: "accountType",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
    );
  }

   async down(queryRunner) {
    await queryRunner.dropTable("users");
  }
}