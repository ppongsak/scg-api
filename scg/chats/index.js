const app = require('express')
const router = app.Router()
const { message } = require('./linebot')
const line = require('@line/bot-sdk')

require('dotenv').config()

const config = {
    channelAccessToken: process.env.channelAccessToken,
    channelSecret: process.env.channelSecret
}

router.post('/message', line.middleware(config), message)

module.exports = router
