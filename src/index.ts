import express from "express";
import "./db";
import noteRouter from "./routers/note";
import cors from "cors";

// create a server
const app = express();

app.use(cors())
//14/5.

// this will parse post request coming from fetch.post() method
app.use(express.json());
// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     req.on("data", (chunk) => {
//         req.body = JSON.parse(chunk);
//         next();
//     })

//   },)


app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Hello World" });
});


app.use(noteRouter);



// listen to a port

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
