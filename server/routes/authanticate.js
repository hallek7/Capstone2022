const router =  require("express").Router();
const User = require ("../models/User");
const bcrypt = require("bcrypt");

// register - create new
router.post("/register", async(req,res)=>{
try{
const salt = await bcrypt.genSalt(10);
const hashedPass = await bcrypt.hash(req.body.password, salt);
const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password: hashedPass
});
 // save the user just created
 const user = await newUser.save(); // all successful send response
 
 res.status(200).json("created", user);
} catch(err){
res.status(500).json(err);
}
});
 module.exports = router;