let db  = require('../dataBaseConfig.js')

exports.cartSave = (req, res)=>{
    let productType = req.body.productType
    let productBrand = req.body.productBrand
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating
    let image = req.body.image

    let value = [[productType,productBrand, productPrice, productRating, image]]

    let sql  = 'insert into cart(productType,productBrand, productPrice, productRating, image) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("cart saved")
        }
    })
}

exports.getCart = (req, res)=>{
    let sql  = "select * from cart"

    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteCart = (req, res)=>{
    let id = req.params.id

    let sql = "delete from cart where id = ?"

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send("data deleted")
        }
    })
}
