const express = require('express');
const app = express();
const cors = require ('cors');
const userRoutes = require('./routes/userRoutes');

require('./connection');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use('users', userRoutes);

const port = app.listen(5000,()=>{
    console.log('Server is running on port');
})