// const { Sequelize } = require("@sequelize/core");
// const { PostgresDialect } = require("@sequelize/postgres");

// const sequelize = new Sequelize({
//   dialect: PostgresDialect,
//   database: "Task",
//   user: "postgres",
//   password: "12345",
//   host: "localhost",
//   port: 5432,
//   clientMinMessages: "notice",
// });
// module.exports = sequelize;

const { Sequelize } = require("@sequelize/core");
const { PostgresDialect } = require("@sequelize/postgres");
const sequelize = new Sequelize({
  dialect: "postgres",
  database: "Task", // Update this to your database name
  username: "postgres", // Update this to your PostgreSQL username
  password: "12345", // Update this to your PostgreSQL password
  host: "localhost",
  port: 5432,
  logging: false, // Set to true if you want to see SQL queries
  dialectOptions: {
    clientMinMessages: "notice", // Updated configuration option
  },
});

module.exports = sequelize;
