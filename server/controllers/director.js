const conn = require("../db/config")

exports.newDirector = async (req, res) => {
    try {
        const data = req.body
        conn.query("insert into director set ?", data, (err, rows) => {
            if (err) return res.status(404).json({ message: "Add failed !" })
            res.status(200).json({ message: "Add successfully!" })
        })

    } catch (error) {
        return res.status(404).json({ message: "Add failed !" })
       
    }
}