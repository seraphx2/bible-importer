import {
  BeDatabaseCreator,
  V11nImporter,
  SwordImporter,
  OsisImporter,
} from "@bible-engine/importers";

const args = process.argv;
const importer = args[2];
const dataFile = args[3];

const creator = new BeDatabaseCreator({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "bibleengine",
  password: "D8m^4Yf3##F@Vgbi2x4",
  database: "bibleengine",
  dropSchema: true,
});

//creator.addImporter(V11nImporter);

if (importer === "osis")
  creator.addImporter(OsisImporter, {
    sourcePath: `D:/bible-importer/osis/${dataFile}`,
  });

if (importer === "sword")
  creator.addImporter(SwordImporter, {
    sourcePath: `D:/bible-importer/sword/${dataFile}`,
    skip: {
      crossRefs: false,
      notes: true,
      strongs: false,
    },
    logLevel: "verbose",
  });

creator.createDatabase();
