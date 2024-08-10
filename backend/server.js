// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const sequelize = require("./config/sequlize");
// const app = express();
// app.use(cors());
// app.use(express.json());

// const userRoutes = require("./routes/userRouter");
// app.use("/api", userRoutes);

// // Sync Sequelize models
// sequelize
//   .sync()
//   .then(() => {
//     const PORT = process.env.PORT || 4024;
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("Unable to connect to the database:", err));

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRouter");
const tasksRoutes = require("./routes/tasksRouter");
const sequelize = require("./config/sequlize");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", tasksRoutes);
// Sync Sequelize models and start the server
sequelize
  .sync()
  .then(() => {
    const PORT = process.env.PORT || 4024;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
