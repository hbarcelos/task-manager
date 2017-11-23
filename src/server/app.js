require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')

const taskRouter = require('./components/task/router')

const app = express()

app.use(bodyParser.json())
app.use('/api', taskRouter)
app.use(express.static(join(__dirname, '../../public')))

module.exports = app
