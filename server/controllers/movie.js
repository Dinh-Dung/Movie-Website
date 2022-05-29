const conn = require("../db/config")

exports.newMovie = async (req, res) => {
    try {
        const data = req.body
        conn.query("insert into film set ?", data, (err, rows) => {
            if (err) {
                return res.status(404).json({ message: "Add failed !" })
            }
            res.status(200).json({ message: "Add successfully!" })
        })

    } catch (error) {

        return res.status(404).json({ message: "Add failed !" })
    }
}

exports.getTopMovie = async (req, res) => {
    try {
        const category = req.query.category // => Important

        conn.query(`SELECT * FROM film WHERE Category=${category}  ORDER BY Rate DESC`, (err, rows) => {
            if (!err) {
                res.send(rows)
            }
        })

    } catch (error) {

        return res.status(404).json({ message: "Cannot find films !" })
    }
}