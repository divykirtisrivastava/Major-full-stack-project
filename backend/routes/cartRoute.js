const express = require('express')
const router  = express.Router()
let upload =  require('../multerConfig.js')
let cartController  = require('../controller/cartController.js')

router.post('/cartSave',cartController.cartSave)
router.get('/getCart',cartController.getCart)

module.exports = router;