import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        String,
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
export const Task = mongoose.model("Task", schema)