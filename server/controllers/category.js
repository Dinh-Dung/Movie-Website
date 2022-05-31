const conn = require("../db/config")

exports.newSubCategory = async (req, res) => {
    try {
        const data = req.body
        conn.query("insert into subcategory set ?", data, (err, rows) => {
            if (err) return res.status(404).json({ message: "Add failed !" })
            res.status(200).json({ message: "Add successfully!" })
        })

    } catch (error) {
        return res.status(404).json({ message: "Add failed !" })
    }
}

exports.newCategory = async (req, res) => {
    try {
        const data = req.body
        conn.query("insert into category set ?", data, (err, rows) => {
            if (err) return res.status(404).json({ message: "Add failed !" })
            res.status(200).json({ message: "Add successfully!" })
        })

    } catch (error) {
        return res.status(404).json({ message: "Add failed !" })
    }
}
exports.getCategory = async (req,res)=>{
    try {
        conn.query("Select category.Name as CateName, subcategory.Name as SubName  from category left join subcategory on category.ID = subcategory.Category",(err,rows)=>{
            if (err) return res.status(404).json({ message: "Add failed !" })
                return res.send(rows)
        })
        
    } catch (error) {
        return res.status(404).json({ message: "Add failed !" })
    }
}