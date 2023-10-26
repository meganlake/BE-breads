//Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// Configuaration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//Routes
app.get('/', (req, res) => {
    res.send("hello world")
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// Bakers 
const bakersController = require('./controllers/baker_controllers.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//Mongo-Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})