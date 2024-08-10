// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/sequlize");
// const { v4: uuidv4 } = require("uuid"); // Import UUID library

// // Define the User model
// const User = sequelize.define("User", {
//   user_id: {
//     type: DataTypes.UUID,
//     defaultValue: uuidv4, // Automatically generate UUIDs
//     primaryKey: true,
//     allowNull: false,
//   },
//   user_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   user_email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   user_password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = User;

const { DataTypes } = require("@sequelize/core");
const sequelize = require("../config/sequlize");
const { v4: uuidv4 } = require("uuid");

const User = sequelize.define("User", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
