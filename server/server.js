var express = require("express");
var bodyparser = require("body-parser");
const router = require("./routers");

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/api', router)

// app.get('/get', (req, res) => {
//     con.query('Select * from products', (err, rows) => {
//         if(!err) {
//             res.send(rows)
//         }
//     })
// })
  
var server = app.listen(8080, function () {
  console.log("Server listening on port " + server.address().port);
});

module.exports = app;
