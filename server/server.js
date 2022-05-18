var express = require("express");
var bodyparser = require("body-parser");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "banhang",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
});

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/get', (req, res) => {
    con.query('Select * from products', (err, rows) => {
        if(!err) {
            res.send(rows)
        }
    })
})

app.post("/new/product", (req, res) => {
  const product = req.body
  con.query("insert into products set ?", product, (err, rows) => {
    if(err) return res.status(404).json({ message: "Add failed !" })
    res.status(200).json({ message: "Add successfully!" })
  })
})

var server = app.listen(8080, function () {
  console.log("Server listening on port " + server.address().port);
});

module.exports = app;
