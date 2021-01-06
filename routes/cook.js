const cookRouter = require('express').Router()
const models = require('../models')
const Data = require('../data.js')

cookRouter.get('/', (req, res) => {
    models
    .Cook
    .findAll()
    .then(cooks => res.json(cooks))
})

cookRouter.post('/', (req, res) => {
    models
    .Cook
    .bulkCreate(Data)
    .then(cooks => res.json(cooks))
})

cookRouter.put('/:id', (req, res) => {
    models
    .Cook
    .update(req.body, {
        where : {
            id : req.params.id
        }
    })
    .then(cook => res.json(cook))
})

cookRouter.delete('/:id', (req, res) => {
    models
    .Cook
    .destroy({
        where : {
            id : req.params.id
        }
    })
    .then(res.end('Object deleted'))
})



module.exports = cookRouter