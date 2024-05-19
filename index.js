const express = require("express");
const mongoose = require("mongoose");
const URLRouter = require("./routers/Url.Router");
const { redirectToURL } = require("./controller");
require("dotenv").config();

const PORT = process.env.PORT || 10000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.use(express.json());

app.use("/url",URLRouter)

app.get("/:urlId",redirectToURL);

app.use("/*",(req,res)=>{
    res.status(404).json({
        message: "Path not found"
    })
})

mongoose.connect(MONGODB_URI)
    .then(()=>{console.log("Mongodb connection succesful")})
    .catch((error)=> console.error("ERROR CONNECTING WITH MONGODB:", error));

app.listen(PORT,()=>{
    console.log("Server up and running at port -", PORT);
})