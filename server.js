//Dependencies
const express = require('express')

// Configuaration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send("hello world")
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})
