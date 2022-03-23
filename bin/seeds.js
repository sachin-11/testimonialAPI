const path = require("path");
const { Seeder } = require("mongo-seeding");
const env = require("../utils/environment");
const config = {
  database: env.database.uri,
  dropCollections: false,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(path.resolve("./data"), {
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});
// eslint-disable-next-line no-console
console.log("Running...");
seeder
  .import(collections)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("seeding done");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log("Error in seeding", err.message);
  });
