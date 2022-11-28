const mongoose = require("mongoose");

// create ads schema for the db
const AdsSchema = new mongoose.Schema({
title:{
type: String,
required : true,
unique: true,
}, 
desc:{
type: String,
required : true,

}, 
photo:{
type: String,
required : false,  
}, 
username:{
type: String,
required : true,
unique: true,
}, 

categories:{
    type: Array,
    required : false
    }},
{// time stamp to makr the created date
timestamp:true }

);
// export the user schema
module.exports = mongoose.model("Ads", AdsSchema);