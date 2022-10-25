const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    reminder: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema);