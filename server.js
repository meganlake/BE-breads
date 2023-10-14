//Dependencies
const express = require('express')

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


//Routes
app.get('/', (req, res) => {
    res.send("hello world")
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})
