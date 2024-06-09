
const TodoTask = require('../models/todo_models');

const getTasks = async (req, res) => {
    try {
        const { taskId } = req.params;

        const todotask = await TodoTask.find();
        res.status(200).json(todotask);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const todotask = await TodoTask.create(req.body);
        res.status(200).json(todotask);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const updateTask = async (req, res) => {
    try {

        const { taskId } = req.params;
        const todotask = await TodoTask.findByIdAndUpdate(taskId, req.body);

        console.log(req.body);
        if (!todotask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const todotask = await TodoTask.findByIdAndDelete(taskId, req.body);

        if (!todotask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task delted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

module.exports = {
    getTasks, createTask, updateTask, deleteTask
};