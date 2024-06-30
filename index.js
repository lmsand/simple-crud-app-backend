const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js")
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
  res.send("Hello from node api server updated")
})

mongoose.connect("mongodb+srv://lmsand99:boNRAsi4BLfbScmO@backenddb.ric2tiv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("connected to database")
  app.listen(8000, () => {
    console.log('Server is running on port 8000')
  })
})
.catch(() => {
  console.log("connection failed")
})
