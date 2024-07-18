let db  = require('../dataBaseConfig.js')

exports.productSave = (req, res)=>{
    let productType = req.body.productType
    let productBrand = req.body.productBrand
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating

    let value = [[productType,productBrand, productPrice, productRating]]

    let sql  = 'insert into product(productType,productBrand, productPrice, productRating) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("product saved")
        }
    })
}

exports.getProduct = (req, res)=>{
    let sql  = "select * from product"

    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}