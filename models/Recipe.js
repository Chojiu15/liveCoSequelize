'use-strict'
const models = require('../models/index')

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        name : DataTypes.STRING,
        description : DataTypes.TEXT
    }, {})

    Recipe.associate = models => {
        Recipe.belongsTo(models.Cook)
        Recipe.hasMany(models.Feedback)
    }
    return Recipe
}