const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.kebig.gcp.mongodb.net/capstone22?retryWrites=true&w=majority`,()=>{
    console.log('YES!connected to db');
})

