// const bcrypt = require("bcryptjs");
// const User = require("../models/users");

// exports.signup = async (req, res) => {
//   try {
//     const { email, name, password } = req.body;

//     // Check if user already exists
//     const user = await User.findOne({ where: { user_email: email } });
//     if (user) {
//       return res.status(400).json({ message: "User already exists!" });
//     }

//     // Bcrypt the user password
//     const bcryptPassword = await bcrypt.hash(password, 10);

//     // Insert new user
//     const newUser = await User.create({
//       user_name: name,
//       user_email: email,
//       user_password: bcryptPassword,
//     });

//     // Return success response
//     return res.status(201).json({
//       message: "User created successfully",
//       user: newUser,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred during signup." });
//   }
// };
//signup
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users"); // Import the Sequelize User model
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ where: { user_email: email } });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Bcrypt the user password
    const bcryptPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const newUser = await User.create({
      user_name: name,
      user_email: email,
      user_password: bcryptPassword,
    });

    // Return success response
    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during signup." });
  }
};

//login

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Find the user by name
    const user = await User.findOne({
      attributes: ["user_name", "user_password"],
      where: { user_name: name },
    });

    if (user) {
      // Compare the provided password with the hashed password
      if (await bcrypt.compare(password, user.user_password)) {
        // Generate JWT token
        const token = jwt.sign(
          { id: user.user_id, username: user.user_name },
          JWT_SECRET,
          { expiresIn: "1h" } // Optional: Set token expiration time
        );
        res.json({ token });
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
