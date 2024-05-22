import mongoose from "mongoose";

mongoose.set("strictQuery", true)
mongoose.connect("mongodb://localhost:27017/note-app").then
(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Error connecting to the database", err);
},);