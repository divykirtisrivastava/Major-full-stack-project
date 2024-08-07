const express = require('express')
const router  = express.Router()
let upload =  require('../multerConfig.js')
let clientController  = require('../controller/clientController.js')

router.post('/clientSave', upload.single('image'), clientController.clientSave)

module.exports = router;
