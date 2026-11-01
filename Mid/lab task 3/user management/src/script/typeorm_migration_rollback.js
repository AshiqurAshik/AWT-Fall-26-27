import { dataSourceOptions } from "@/config/database.config";
import { DataSource } from "typeorm";


const migrateRollback = () => {
  console.log(`Rolling back.....`);
  const ds = new DataSource({
    ...dataSourceOptions,
  } );
  ds.initialize()
    .then(() => {
      ds.undoLastMigration()
        .then(() => {
          console.log("rollback completed");
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

migrateRollback();
