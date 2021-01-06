const recipeRouter = require('express').Router()
const models = require('../models')

recipeRouter.get('/', (req, res) => {
    models
    .Recipe
    .findAll({
        include : [models.Cook, models.Feedback]
    })
    .then(recipes => res.json(recipes))
})

recipeRouter.post('/', (req, res) => {
    models
    .Recipe
    .create(req.body)
    .then(recipe => res.json(recipe))
})



module.exports = recipeRouter