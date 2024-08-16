const express = require('express')
const router  = express.Router()
let upload =  require('../multerConfig.js')
let clientController  = require('../controller/clientController.js')

router.post('/clientSave', upload.single('image'), clientController.clientSave)
router.post('/clientLogin',clientController.clientLogin)
router.post('/verify',clientController.verify)

module.exports = router;
