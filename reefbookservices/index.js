const express = require('express');
const app = express();
// var router = express.Router();

//Import Routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and Running'));


