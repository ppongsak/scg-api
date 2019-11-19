const axios = require('axios')
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDLFp7yzSJl4Ddl3vDSA-5Et42YLBPmbf4'
})

const search = async (req, res) => {
    console.log('searching...')

    const results = axios
        .get(
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDLFp7yzSJl4Ddl3vDSA-5Et42YLBPmbf4&location=13.806212,100.5355183&radius=5000&type=restaurant'
        )
        .then(function(response) {
            return response
        })
        .catch(function(error) {
            console.log(error)
        })
    return results
}

module.exports = {
    search
}
