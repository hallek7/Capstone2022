const router =  require("express").Router();
const User = require ("../models/User");
const Ads = require ("../models/Ads");
const bcrypt = require("bcrypt");

// update the user
router.put("/:id", async (req, res) => {
if (req.body.userId === req.params.id) {
if (req.body.password) { //enc password
const salt = await bcrypt.genSalt(10);
req.body.password = await bcrypt.hash(req.body.password, salt);
}
try {
res.status(200).json(updatedUser);
} catch (err) {
res.status(500).json(err);
}
} else {
res.status(401).json("You can update only your account!");
}
});

// delete user
router.delete("/:id", async (req, res)=>{
if (req.body.userId === req.params.id) {
try {
const user = await User.findById(req.params.id);
try {
    await Post.deleteMany({username: user.username});
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
} catch (err) {
    res.status(500).json(err);
}
} catch (err) {
res.status(404).json("User not found!");
}
} 
else {
res.status(401).json("You can delete only your account!");
}
});
/* delete this "userId" : "6386f910fb02aff53bbabc92",
    "username" : "kitkat777",
    "password" : "kitty7"*/

//GET USER
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;