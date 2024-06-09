const express = require("express");
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controller/task_controller.js');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

module.exports = router;
