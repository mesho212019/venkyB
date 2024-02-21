import mongoose from "mongoose";
const user = new mongoose.Schema({
    name:  {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    }
})
export const User = mongoose.model("todolists",   user)