module.exports = {
  database: {
    options: {
      connectTimeoutMS: 30000,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: 1,
      poolSize: 10,
    },
  },
  smtp: {
    // secure: false
  },
};
