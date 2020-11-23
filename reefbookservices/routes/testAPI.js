var express = require('express');
var router = express.Router();
const players = require("../model/dummyDatabase");

router.get('/', function(req, res, next) {
    res.send('API is working properly')
    // res.json([
    //     {id:1, username:"David"},
    //     {id:2, username:"Elisol"}
    // ]);
});

// router.get("/", async (req, res) => {
//     try {
//       res.status(200).json({
//         data: players
//       });
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
//   });

module.exports = router;
