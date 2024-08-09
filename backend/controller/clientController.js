let db  = require('../dataBaseConfig.js')

exports.clientSave = (req, res)=>{
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let phone = req.body.phone
    let image = req.file.filename

    let value = [[name,email, password, phone, image]]

    let sql  = 'insert into clientlist(name,email, password, phone, image) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("client saved")
        }
    })
}

exports.clientLogin = (req, res)=>{
        
}