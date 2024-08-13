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
    let email = req.body.email
    let password = req.body.password


    let sql  = 'select * from clientlist where email =? and password = ?'

    db.query(sql, [email, password], (err, result)=>{
        if(err) throw err
        else{
            if(result.length > 0){
                res.send(true)
            }else{
                res.send(false)
            }
        }
    })
}