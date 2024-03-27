import express from "express";
import'./db'
// create a server
const app = express();
//9.
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));


app.use((req, res, next) => {
    req.on("data", (chunk) => {
        req.body = JSON.parse(chunk);
        next();
    })
    
  },)

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "Hello World" });
  }
);

app.post("/create", (req, res) => {
  console.log(req.body);
  res.json({ message: "Hello World baaaaaaa" });
});
// listen to a port

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
