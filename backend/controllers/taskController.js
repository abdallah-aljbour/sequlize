const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const { task_name, task_description } = req.body;
    const userId = req.user.id;

    // Create a new task
    const newTask = await Task.create({
      task_name: task_name,
      task_description: task_description,
      user_id: userId,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
