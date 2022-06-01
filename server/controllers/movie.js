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

exports.deleteMovie = async (req, res) => {
    try {
        const {id} = req.params
        conn.query("delete from film where id=?", id, (err) => {
            if (err) {
                return res.status(404).json({ message: "Delete failed !" })
            }
            res.status(200).json({ message: "Delete successfully!" })
        })

    } catch (error) {

        return res.status(404).json({ message: "Delete failed !" })
    }
}

exports.getFilm = async (req, res) => {
    try {

        conn.query(`SELECT * FROM film `, (err, rows) => {
            if (!err) {
                res.send(rows)
            }
        })

    } catch (error) {

        return res.status(404).json({ message: "Cannot find films !" })
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
exports.showFilm = async (req, res) => {
    try {
        conn.query(``, (err, rows) => {
            if (!err) {
                res.send(rows)
            }
        })

    } catch (error) {

        return res.status(404).json({ message: "Cannot find films !" })
    }
}