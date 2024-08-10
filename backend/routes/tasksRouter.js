const express = require("express");
const router = express.Router();
const authenticate = require("../models/auth");
const taskController = require("../controllers/taskController");

router.post("/creatTask", authenticate, taskController.createTask);
module.exports = router;
