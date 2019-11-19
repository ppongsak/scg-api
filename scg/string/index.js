const app = require('express')
const router = app.Router()
const { index } = require('./finds')

const basicAuth = require('express-basic-auth')

router.use(
    basicAuth({
        users: { scgtest: 'scgtest' }
    })
)

router.get('/', index)

module.exports = router
