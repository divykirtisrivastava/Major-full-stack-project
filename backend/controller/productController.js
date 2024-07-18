let db  = require('../dataBaseConfig.js')

let productSave = (req, res)=>{
    let productType = req.body.productType
    let productBrand = req.body.productBrand
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating

    let value = [[productType,productBrand, productPrice, productRating]]

    let sql  = 'insert into '
}