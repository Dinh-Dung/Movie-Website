const conn = require("../db/config")
const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const data = req.body

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.Pass, salt)

        const result = {
            ...data,
            Pass: hashedPassword
        }

        conn.query("insert into users set ?", result, (err, rows) => {
            if (err) return res.status(404).json({ message: "Add failed !" })
            res.status(200).json({ message: "Add successfully!" })
        })

    } catch (error) {
        return res.status(404).json({ message: "Add failed !" })
    }
}