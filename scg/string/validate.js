/**
 * @description validate requested body params
 * @param {string} scope
 * @returns {*}
 */

const { celebrate, Joi } = require('celebrate')

const validateBody = celebrate({
    body: Joi.object().keys({
        search: Joi.string(),
        value: Joi.string().required()
    })
})

module.exports = {
    validateBody
}
