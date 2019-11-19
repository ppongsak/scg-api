const express = require('express')
const routes = require('./routes/routes')

let app = express()

app.use('/api/v1/scg', routes)

module.exports = app
