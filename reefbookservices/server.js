const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, 
{ userNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log(`connection to database established`)
}).catch(err=>{
    console.log(`db error ${err.message}`);
    process.exit(-1)
});

//Import Routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(4000, () => console.log('Server Up and Running')); 