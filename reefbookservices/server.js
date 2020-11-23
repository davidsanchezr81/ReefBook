const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require("cors"); //New
const bodyParser = require("body-parser");//New
const logger = require("morgan");//New

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const testAPIRouter = require('./routes/testAPI'); //new

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { userNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log(`connection to database established`)
    }).catch(err => {
        console.log(`db error ${err.message}`);
        process.exit(-1)
    });

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/testAPI', testAPIRouter);
 

app.listen(4000, () => console.log('Server Up and Running')); 

module.exports = app;