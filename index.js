const express = require('express')
const app = express()
const models = require('./models')
const cookRouter = require('./routes/cook')
const bodyParser = require('body-parser')
const feedBackRouter = require('./routes/feedback')
const recipeRouter = require('./routes/recipe')

app.use(bodyParser.urlencoded({
    extended : true
}))

app.get('/', (req, res) => {
    res.send('Welcome to my cooking api')
})


app.use('/cook', cookRouter)
app.use('/feedback', feedBackRouter)
app.use('/recipe', recipeRouter)

models
    .sequelize
    .sync()
    .then(() => {
        app.listen(3001, console.log('Server is running'))
    })

