require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./src/routes/index')

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
app.use('/v1', routes)


app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto '  + process.env.BACKEND_URL)
})