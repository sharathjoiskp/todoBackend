const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: [true, "Please enter task title"]
    },
    taskDesc: {
        type: String,
        required: [true, "Please enter task description"]
    }
}, {
    timestamps: true,
});

const TodoTask = mongoose.model("TodoTask", TodoSchema);

module.exports = TodoTask;
