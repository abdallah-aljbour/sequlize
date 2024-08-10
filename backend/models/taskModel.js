const { DataTypes } = require("@sequelize/core");
const sequelize = require("../config/sequlize");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Automatically increments the ID for new entries
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
);

module.exports = Task;
