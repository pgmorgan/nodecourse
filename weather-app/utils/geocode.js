const request = require('request')

const geocode = (address, callback) => {
    const apiKey = "pk.eyJ1IjoicGV0ZXJnbTEiLCJhIjoiY2p6YTAwcXNoMDB1ZzNtbzZ1OTR6aW1tdiJ9.sGjVElKrCqYJ02eTei_gNg"
    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    url += encodeURIComponent(address) 
    url += ".json?access_token=" + apiKey + "&limit=1"
    let optionsObj = {
        url:    url,
        json:   true,
    }

    const reqFunc = (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length === 0) {
            callback("Unable to find location provided.", undefined)
        } else {
            callback(undefined, {
                latitude:   response.body.features[0].center[1],
                longitude:  response.body.features[0].center[0],
                location:   response.body.features[0].place_name,
            })
        }
    }

    request(optionsObj, reqFunc)
}

module.exports = geocode