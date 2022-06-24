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

exports.getUser = async (req, res) => {
    try {
        const ID = req.query.user
        conn.query(`SELECT * FROM users WHERE ID=${ID}`, (err, rows) => {
            if (!err) {
              return  res.send(rows)
            }
        })

    } catch (error) {

        return res.status(404).json({ message: "Cannot find ID !" })
    }
}

exports.login = async (req, res) => {
    try {
        const {Username, Pass} = req.body
        conn.query(`select * from users where Username=?`, Username, async (err, users) => {
            if (err) return res.status(404).json({ message: JSON.stringify(err) })
            if(users.length) {
                // tạo hash password từ Pass user resquest lên
                const [user] = users;
                const ckPass = await bcrypt.compare(Pass, user.Pass)
                if(ckPass) {
                    return res.status(200).json(user)
                }
            }
            return res.status(404).json({ message: "Username or password does not exist!" })
        })

    } catch (error) {
        return res.status(404).json({ message: "Login failed !" })
    }
}
