const express = require('express')
const router  = express.Router()
let adminController  = require('../controller/adminController.js')

router.post('/adminLogin',adminController.adminLogin)

module.exports = router;