import { dataSourceOptions } from "../config";
import { DataSource } from "typeorm";


export const truncateTables = () => {
  console.log(`Clearing Tables.....`);
  const ds = new DataSource({
    ...dataSourceOptions,
  } );
  return ds
    .initialize()
    .then(async () => {
      try {
        const entities = ds.entityMetadatas;
        for (const entity of entities) {
          const repository = ds.getRepository(entity.name); // Get repository
          await repository.clear(); // Clear each entity table's content
        }
        console.log("All tables cleared");
      } catch (err) {
        console.error(err);
      }
    })
    .catch((err) => console.error(err));
};
