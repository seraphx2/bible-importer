"use strict";

var _importers = require("@bible-engine/importers");
var args = process.argv;
var importer = args[2];
var dataFile = args[3];
var creator = new _importers.BeDatabaseCreator({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "bibleengine",
  password: "D8m^4Yf3##F@Vgbi2x4",
  database: "bibleengine",
  dropSchema: true
});
creator.addImporter(_importers.SwordImporter, {
  sourcePath: "D:/bible-importer/sword/".concat(dataFile),
  skip: {
    crossRefs: false,
    notes: true,
    strongs: false
  },
  logLevel: "verbose"
});
creator.createDatabase();