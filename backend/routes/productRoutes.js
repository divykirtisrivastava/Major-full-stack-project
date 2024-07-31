const express = require('express')
const router  = express.Router()
let upload =  require('../multerConfig.js')
let productController  = require('../controller/productController.js')

router.post('/productSave',upload.single('image'), productController.productSave)

router.get('/getProduct', productController.getProduct)

router.delete('/deleteProduct/:id', productController.deleteProduct)

router.get('/getProductById/:id', productController.getProductById)

router.put('/updateProduct/:id', productController.updateProduct)

module.exports = router;

