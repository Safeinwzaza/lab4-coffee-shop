// src/app.js
const express = require('express')
const cors = require('cors')
const app = express()

// Middleware (ใช้ express.json() แทน body-parser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// เรียกใช้ Routes
require('./routes')(app)

// Start Server
const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log('CoffeeShop Server running on port ' + port)
})

