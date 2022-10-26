const Task = require("../models/Task");

module.exports={
    // @desc Get index (homepage)
    // @route Get /api
    // @access Public
    getIndex: async (req,res) => {
        try{
            const tasks = await Task.find()
            res.send({tasks: tasks});
        } catch(err) {
            console.log(err);
        }
        
    },
    createTask: async (req,res) => {
        try {
            const task = await Task.create({
                task: req.body.task,
                day: req.body.day,
                reminder: req.body.reminder,
            });
            console.log("Post has been added!");
            res.send(task);
        } catch (err) {
          console.log(err);
        }
    },
    deleteTask: async (req, res) => {
        try {
            const deletedTask = await Task.findOneAndDelete({_id: req.params.id})
            console.log("Deleted Post")
        } catch(err) {
            console.log(err);
        }
    },
}