const express = require('express')
const router  = express.Router()
let upload =  require('../multerConfig.js')
let cartController  = require('../controller/cartController.js')

router.post('/cartSave/:username',cartController.cartSave)
router.get('/getCart/:username',cartController.getCart)
router.delete('/deleteCart/:id/:username',cartController.deleteCart)

module.exports = router;