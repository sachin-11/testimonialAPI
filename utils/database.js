const mongoose = require("mongoose");
const constants = require("./constants");
const environment = require("./environment");

const DB = environment.database.uri;
const connection = mongoose.connection;

const connect = () => {
  mongoose.connect(DB, constants.database.options);
};

connection
  .on("connected", () => {
    // eslint-disable-next-line no-console
    console.log("%s Database Connected", "✔");
  })
  .on("disconnected", () => {
    // eslint-disable-next-line no-console
    console.log("%s Database Disconnected", "✗");
  })
  .on("error", (err) => {
    console.error(err);
    // eslint-disable-next-line no-console
    console.log(
      "%s MongoDB connection error. Please make sure MongoDB is running.",
      "✗"
    );
    // eslint-disable-next-line no-undef
    process.exit();
  });

// eslint-disable-next-line no-undef
process.on("SIGINT", () => {
  connection.close(() => {
    // eslint-disable-next-line no-console
    console.log(
      "%s Mongoose default connection is disconnected due to application termination.",
      "✗"
    );
    // eslint-disable-next-line no-undef
    process.exit(0);
  });
});

module.exports = { connect };
