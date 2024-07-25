const express = require('express')
const router  = express.Router()
let productController  = require('../controller/productController.js')

router.post('/productSave', productController.productSave)

router.get('/getProduct', productController.getProduct)

router.delete('/deleteProduct/:id', productController.deleteProduct)

router.get('/getProductById/:id', productController.getProductById)

module.exports = router;

