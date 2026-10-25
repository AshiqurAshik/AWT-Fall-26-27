import { dataSourceOptions } from "../config";
import { DataSource } from "typeorm";


const migrateRun = () => {
  console.log(`Migrating.....`);
  const ds = new DataSource({
    ...dataSourceOptions,
  } );
  ds.initialize()
    .then(() => {
      ds.runMigrations()
        .then(() => {
          console.log("migration completed");
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

migrateRun();
