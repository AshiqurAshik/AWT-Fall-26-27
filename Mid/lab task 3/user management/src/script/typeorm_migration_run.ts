import { dataSourceOptions } from "@/config";
import { DataSource } from "typeorm";

const migrateRun = async () => {
  console.log("Migrating.....");

  const ds = new DataSource(dataSourceOptions);

  try {
    await ds.initialize();
    console.log("Database connected.");

    await ds.runMigrations();
    console.log("Migration completed.");
  } catch (err) {
    console.error("Migration failed:", err);
    process.exitCode = 1;
  } finally {
    if (ds.isInitialized) {
      await ds.destroy();
    }
  }
};

migrateRun();