const conn = require("../db/config");

exports.mostView = async (req, res) => {
  try {
    const data = req.body;
    conn.query("insert into mostview set ?", data, (err, rows) => {
      if (err) {
        return res.status(404).json({ message: "Add failed !" });
      }
      res.status(200).json({ message: "Add successfully!" });
    });
  } catch (error) {
      
    return res.status(404).json({ message: "Add failed !" });
  }
};

exports.getMostView = async (req, res) => {
  try {
    conn.query(`SELECT * FROM mostview INNER JOIN film ON mostview.FilmID = film.ID `, (err, rows) => {
      if (!err) {
        return res.send(rows);
      }
      else{
        return res.status(404).json({ message: "Cannot find films !" });
      }
    });
  } catch (error) {
    return res.status(404).json({ message: "Cannot find films !" });
  }
};
