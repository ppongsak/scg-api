/**
 * @description find x,y,z value
 * @package scg/string
 */
const _ = require('underscore')

/**
 *
 * @param {string} req
 * @param {string} res
 * @returns {json}
 */
const index = async (req, res) => {
    try {
        let search = req.query.search
        let value = req.query.value

        if (!_.isEmpty(search) || !_.isNull(search)) {
            let array = search.split(',')
            let arrCount = {}

            array.forEach(element => {
                arrCount[element] = (
                    value.match(new RegExp(element, 'g')) || []
                ).length
            })

            return res.status(200).json({
                success: true,
                message: 'success',
                data: { results: arrCount }
            })
        }
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: 'error to find x,y,z',
            data: {}
        })
    }
}

module.exports = {
    index
}
