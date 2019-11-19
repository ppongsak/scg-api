const line = require('@line/bot-sdk')

require('dotenv').config()

const config = {
    channelAccessToken: process.env.channelAccessToken,
    channelSecret: process.env.channelSecret
}

const client = new line.Client(config)

const message = async (req, res) => {
    Promise.all(req.body.events.map(handleEvent)).then(result =>
        res.json(result)
    )

    return res.status(200).json({
        success: true,
        message: 'webhook is working...',
        data: {}
    })
}

const handleEvent = async event => {
    if (event.type === 'message' && event.message.type === 'text') {
        await handleMessageEvent(event)
    } else {
        return Promise.resolve(null)
    }
}

const handleMessageEvent = async event => {
    console.log(event.message.text)

    var msg = {
        type: 'text',
        text: 'hello there !!!'
    }

    let text = event.message.text.toLowerCase()

    switch (text) {
        case 'scg':
            msg = {
                type: 'text',
                text: 'The Siam Cement Group Public Company Limited'
            }
            break
        case 'name':
            msg = {
                type: 'text',
                text: 'pongsak prabparn'
            }
            break
        case 'who are you ?':
            msg = {
                type: 'text',
                text: 'my name is unklebot can i help you ?'
            }
            break
        default:
            break
    }

    return client.replyMessage(event.replyToken, msg)
}

module.exports = {
    message
}
