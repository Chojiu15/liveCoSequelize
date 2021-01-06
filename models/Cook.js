'use-strict'
const models = require('../models')

module.exports = (sequelize, Datatypes) => {
    const Cook = sequelize.define('Cook', {
        name : Datatypes.STRING,
        email : Datatypes.STRING,
        type : Datatypes.STRING
    }, {})

    return Cook
}