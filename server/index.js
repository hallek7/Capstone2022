const express = require ("express");
const app = express ();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authanticate");
const userRoute = require("./routes/users");
const adsRoute = require("./routes/ads");
const typeRoute = require("./routes/types");
const multer = require("multer");

dotenv.config ();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

// create a storage to take file and save into images folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
 //upload file/image 
 const upload = multer({storage: storage});
 app.post("/server/upload", upload.single("file"), (req, res) => {
   res.status(200).json("File has been uploaded");
 });

app.use("/server/authanticate",authRoute);
app.use("/server/users", userRoute);
app.use("/server/ads", adsRoute);
app.use("/server/types", typeRoute);

app.listen (5000, ()=>{
console.log("Server is running now");
});

