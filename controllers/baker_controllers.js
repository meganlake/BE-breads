// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

//Baker Seed Data Route
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

//INDEX
baker.get('/', (req, res) => {
    Baker.find().then((foundBakers) => {
        Bread.find().then((foundBreads) => {
            res.render('index', {
                breads: foundBreads,
                bakers: foundBakers,
                title: 'Index Page',
            })
        })
    })
})           

// delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
        .then(deletedBaker => { 
            res.status(303).redirect('/breads')
        })
})




// export
module.exports = baker                    
