require("dotenv").config();

module.exports = {
  // eslint-disable-next-line no-undef
  port: process.env.PORT,
  database: {
    // eslint-disable-next-line no-undef
    uri: process.env.DB_URI,
  },
  app: {
    // eslint-disable-next-line no-undef
    url: process.env.APP_URL,
  },
};
