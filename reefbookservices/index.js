var express = require('express');
const app = require('./app');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// module.exports = router;


app.listen(9000, () => console.log('Server Up and Running'));