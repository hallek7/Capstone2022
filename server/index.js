const express = require ("express");
const app = express ();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authanticate");
 

dotenv.config ();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to db"))
.catch(err=>console.log(err));

app.use("/server/authanticate",authRoute);

app.listen (5000, ()=>{
console.log("Server is running now");
});

 