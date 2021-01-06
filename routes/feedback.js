const feedBackRouter = require('express').Router()
const models = require('../models')

feedBackRouter.get('/', (req, res) => {
    models
    .Feedback
    .findAll()
    .then(feedbacks => res.json(feedbacks))
})

feedBackRouter.post('/', (req, res) => {
    models 
    .Feedback
    .create({
        comments : 'Its really good',
        RecipeId : 2
    })
    .then(feedback => res.json(feedback))
})




module.exports = feedBackRouter