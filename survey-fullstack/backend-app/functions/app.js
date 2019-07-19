'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const api = require('./routes')
const cors = require('cors')
const app = express()

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', api)

module.exports = app