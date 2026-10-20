import { Table } from "typeorm";

export class CreateProductTable1792425872385  {
   async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },

          {
            name: "category",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "price",
            type: "float",
            isNullable: false,
          },
          {
            name: "quantity",
            type: "int",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
        ],
      }),
    );
  }

   async down(queryRunner) {
    await queryRunner.dropTable("products");
  }
}
