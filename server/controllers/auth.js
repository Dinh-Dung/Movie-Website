const conn = require("../db/config")
const bcryptjs = require('bcryptjs')

exports.register = async (req, res) => {
    try {
        const data = req.body

        // hashing password
        const hashedPassword = await bcryptjs.hash(data.Pass, await bcryptjs.genSalt(10))

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

exports.login = async (req, res) => {
    try {
        const {Username, Pass} = req.body
        conn.query(`select * from users where Username=?`, Username, async (err, users) => {
            if (err) return res.status(404).json({ message: JSON.stringify(err) })
            if(users.length) {
                // tạo hash password từ Pass user resquest lên
                const [user] = users;
                const ckPass = await bcryptjs.compare(Pass, user.Pass)
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

exports.editUsers = async (req, res) =>{
    try {
        const data =  req.body
        conn.query(`update users set ? where ID=${data.ID}`, data , (err ,rows) =>{
            if (err){
                return res.status(404).json({message: JSON.stringify(err)})
            }
            res.status(200).json({message: "Edit successfully !"})
        })
    }catch(error){
        return res.status(404).json({ message: "Edit failed !"})
    }
}

exports.deleteUsers = async (req, res) => {
    try {
        const {id} = req.params
        conn.query("delete from users where id=?", id, (err) => {
            if (err) {
                return res.status(404).json({ message: "Delete failed !" })
            }
            res.status(200).json({ message: "Delete successfully!" })
        })

    } catch (error) {

        return res.status(404).json({ message: "Delete failed !" })
    }
}
exports.getUsers = async (req, res) => {
    try {

        conn.query(`SELECT * FROM users `, (err, rows) => {
            if (!err) {
                res.send(rows)
            }
        })

    } catch (error) {

        return res.status(404).json({ message: "Cannot find films !" })
    }
}

