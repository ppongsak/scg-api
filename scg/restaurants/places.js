const _ = require('underscore')
const maps = require('./google-map')

const index = async (req, res) => {
    let searching = maps.search(req)
    const searchPlaces = await searching

    return res.status(200).json({
        success: true,
        message: 'success',
        results: searchPlaces.data.results
    })
}

module.exports = {
    index
}
