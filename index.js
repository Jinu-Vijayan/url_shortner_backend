const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/urlShortnerApp")
    .then(()=>{console.log("Mongodb connection succesful")})
    .catch((error)=> console.error("ERROR CONNECTING WITH MONGODB:", error));

app.listen(PORT,()=>{
    console.log("Server up and running at port -", PORT);
})