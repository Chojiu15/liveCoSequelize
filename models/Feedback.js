'use-strict'
const models = require('../models')

module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        comments : DataTypes.TEXT
    },{})

    return Feedback
}