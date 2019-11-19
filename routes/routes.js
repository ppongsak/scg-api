const express = require('express')
const router = express.Router()
const string = require('../scg/string')
const restaurants = require('../scg/restaurants')
const chats = require('../scg/chats')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

router.use('/string', string)
router.use('/restaurants', restaurants)
router.use('/chats', chats)

module.exports = router
