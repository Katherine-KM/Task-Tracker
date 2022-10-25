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
                reminder: 'false',
            });
            console.log("Post has been added!");
            res.send(task);
        } catch (err) {
          console.log(err);
        }
    },
}