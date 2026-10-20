import {
  DefaultNamingStrategy,


} from "typeorm";
import { camelCase, snakeCase } from "typeorm/util/StringUtils";
import * as dotenv from "dotenv";
dotenv.config();

/**
 * Snake naming will be used in database operations
 */
export class SnakeNamingStrategy
  extends DefaultNamingStrategy
  
{
  tableName(className, customName) {
    if (customName) return customName;
    const snakeCasedClassName = snakeCase(className);
    const splittedClassName = snakeCasedClassName.split("_");
    const lastWord = splittedClassName[splittedClassName.length];
    switch (lastWord) {
      case "status":
        return `${snakeCasedClassName}es`;
      default:
        return `${snakeCasedClassName}s`;
    }
  }

  columnName(
    propertyName,
    customName,
    embeddedPrefixes,
  ) {
    return (
      snakeCase(embeddedPrefixes.join("_")) +
      (customName || snakeCase(propertyName))
    );
  }

  relationName(propertyName) {
    return camelCase(propertyName, true);
  }

  joinColumnName(relationName, referencedColumnName) {
    return snakeCase(`${relationName}_${referencedColumnName}`);
  }

  joinTableName(
    firstTableName,
    secondTableName,
    firstPropertyName,
  ) {
    return snakeCase(
      `${firstTableName}_${firstPropertyName.replace(
        /\./gi,
        "_",
      )}_${secondTableName}`,
    );
  }

  joinTableColumnName(
    tableName,
    propertyName,
    columnName,
  ) {
    return snakeCase(`${tableName}_${columnName || propertyName}`);
  }

  classTableInheritanceParentColumnName(
    parentTableName,
    parentTableIdPropertyName,
  ) {
    return snakeCase(`${parentTableName}_${parentTableIdPropertyName}`);
  }
}

export const dataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: "public",
  entities: [__dirname + "/../modules/**/entities/*.entity.{ts,js}"],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [__dirname + "/../database/migrations/*.ts"],
  logging: process.env.NODE_DB_ENV
    ? process.env.NODE_DB_ENV == "development"
      ? false
      : false
    : false,
  synchronize: false,
};

export default dataSourceOptions;
