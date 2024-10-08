const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const db = require('./dataBaseConfig.js')
const productRouter = require('./routes/productRoutes.js')
const cartRouter = require('./routes/cartRoute.js')
const clientRouter = require('./routes/clientRoute.js')
const adminRouter = require('./routes/adminRoute.js')

let app  = express()
app.use(express.json())
app.use(express.static('uploads'))
app.use(cors())

db.connect((err)=>{
      if(err) throw err;
      else{
            console.log("database connected")
      }
})

// create product Table

let productTableQuery = `CREATE TABLE if not exists product (
  id INT NOT NULL AUTO_INCREMENT,
  productType VARCHAR(255) NULL,
  productBrand VARCHAR(255) NULL,
  productPrice VARCHAR(255) NULL,
  productRating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));`

db.query(productTableQuery, (err, result)=>{
      if(err) throw err
      else{
            console.log("product table created")
      }
} )
let cartTableQuery = `CREATE TABLE if not exists cart (
  id INT NOT NULL AUTO_INCREMENT,
  productType VARCHAR(255) NULL,
  productBrand VARCHAR(255) NULL,
  productPrice VARCHAR(255) NULL,
  productRating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));`

db.query(cartTableQuery, (err, result)=>{
      if(err) throw err
      else{
            console.log("cart table created")
      }
} )
let clientTableQuery = `CREATE TABLE if not exists clientlist (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  password VARCHAR(255) NULL,
  phone VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));`

db.query(clientTableQuery, (err, result)=>{
      if(err) throw err
      else{
            console.log("clientlist table created")
      }
} )


app.use('/api', productRouter)
app.use('/api', cartRouter)
app.use('/api', clientRouter)
app.use('/api', adminRouter)

app.listen(3000, ()=>{
      console.log("server is running....")
})