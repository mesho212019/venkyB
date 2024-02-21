import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
    try {
        const{title, description} = req.body; 
        await Task.create({
            title, 
            description,
            user: req.user,
        }) 
        return next(new ErrorHandler("Task Add Successfully", 201))
        // res.status(201).json({
        //     success: true,
        //     message: "Task Add Successfully"
        // })    
    } catch (error) {
        next(error)
    } 
}

export const getMyTask = async(req, res, next) => {
    try {
        const userId = req.user._id
        const tasks = await Task.find({user: userId})
        return next(new ErrorHandler("Task Not Found", 200))
        // res.status(200).json({
        //     success: true,
        //     tasks,
        // })    
    } catch (error) {
        next(error)
    } 
} 

export const updateTask = async (req, res, next ) => {
    try {
        const task = await Task.findById(req.params.id);
        task.isCompleted = !task.isCompleted; 
        await task.save();
        return next(new ErrorHandler("Task Not Found", 404))
        // return next(new Error("Nice"))
        // res.status(200).json({
        //     success: true,
        //     message: "Task Saved"
        // });
    } catch (error) { 
        next(error)
        // console.error(error);
        // res.status(400).json({
        //     success: false,
        //     message: "Validation Error",
        //     errors: error.errors
        // });
    }

    // task.isCompleted = !task.isCompleted;
    // await task.save() 
    // res.status(200).json({
    //     success: true,
    //     message: "Task Updated"
    // }) 
} 

export const deleteTask = async (req, res, next) => {
    try{
        const task = await Task.findById(req.params.id);
        if(!task){ 
            return next(new ErrorHandler("Task Not Found", 404))
            // return next(new Error("Invalid Id"))
            // return res.status(404).json({
            //     success: false,
            //     message: "Task not found"
            // });
        }
        await Task.deleteOne({ _id: task._id }); 
        // await task.remove();
        res.status(200).json({
            success: true, 
            message: "Task Deleted"
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    } 
    // const task = await Task.findById(req.params.id);
    // await task.remove();
    // res.status(200).json({
    //     success: true, 
    //     message: "Task Deleted"
    // })
}

