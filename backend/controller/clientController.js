let db  = require('../dataBaseConfig.js')
let jwt =require('jsonwebtoken')
let bcrypt =require('bcryptjs')

function generateToken(data){
    return jwt.sign({id: data.id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}


exports.clientSave = async (req, res)=>{
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let hash = await bcrypt.hash(password, 10)
    let phone = req.body.phone
    let image = req.file.filename

    let value = [[name,email, hash, phone, image]]

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
    let sql  = 'select * from clientlist where email =?'

    db.query(sql, [email], (err, result)=>{
        if(err) throw err
        else{
            if(result.length > 0){
              bcrypt.compare(password, result[0].password, async (err, isMatch)=>{
                if(err) throw err
                else{
                    if(isMatch == true){
                        let username = email.split('@')[0]
                        createClientTable(username)
                        let token = await generateToken(result[0])
                        console.log(token)
                        res.json({isMatch, token, result})
                    }else{
                        res.send(false)
                    }
                }
              })
            }
        }
    })
}

exports.verify = (req, res)=>{
    let token = req.headers['authorization'].split(" ")[1]
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decode)=>{
            db.query('select * from clientlist where id = ?', [decode.id], (err, result)=>{
                if(err) throw err
                else{
                    res.json(result[0])
                }
            })
        })
    }
}



function createClientTable(username){
    let cartTableQuery = `CREATE TABLE if not exists ${username} (
        id INT NOT NULL AUTO_INCREMENT,
        productType VARCHAR(255) NULL,
        productBrand VARCHAR(255) NULL,
        productPrice VARCHAR(255) NULL,
        productRating VARCHAR(255) NULL,
        image VARCHAR(255) NULL,
        PRIMARY KEY (id));`
      
      db.query(cartTableQuery, (err, result)=>{
            if(err) throw err
            else{
                  console.log("client table created")
            }
      } )
}

