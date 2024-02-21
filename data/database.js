import mongoose from "mongoose";
export const connectDB = () => {
    // mongoose.connect("mongodb://localhost:27017", {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'todo'
    })
    .then(() => console.log("database connect"))
    .catch(() => console.log(e))
}