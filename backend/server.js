const express = require('express');
const app = express();
const cors = require ('cors');

app.use(cores());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.listen(5000,()=>{
    console.log('Server is running on port');
})