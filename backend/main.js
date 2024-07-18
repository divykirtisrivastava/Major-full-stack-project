const express = require('express')
const db = require('./dataBaseConfig.js')
const productRouter = require('./routes/productRoutes.js')

let app  = express()
app.use(express.json())

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
  PRIMARY KEY (id));`

db.query(productTableQuery, (err, result)=>{
      if(err) throw err
      else{
            console.log("product table created")
      }
} )


app.use('/api', productRouter)

app.listen(3000, ()=>{
      console.log("server is running....")
})