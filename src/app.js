require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const taskRouter = require('./components/task/router')

const app = express()

app.use(bodyParser.json())
app.use('/api', taskRouter)

module.exports = app
