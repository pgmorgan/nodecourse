const request = require('request')

const forecast = (geoData, callback) => {
    let url = "https://api.darksky.net/forecast/ed767fa21dcc5d438e0776ec3ff85082/" 
    url += geoData.latitude + "," + geoData.longitude + "?units=si&lang=en"
    let optionsObj = {
        url:    url,
        json:   true,
    }

    const reqFunc = (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined, undefined)
        } else if (response.body.error) {
            callback('Incomplete or incorrect location input provided.  Unable to find location.', undefined, undefined)
        } else {
            let msg
            msg = response.body.daily.data[0].summary
            msg += " It is currently " + response.body.currently.temperature + " C degrees out."
            msg += "  There is a " + response.body.currently.precipProbability + "% chance of rain."
            callback(undefined, geoData.location, msg)
        }
    }

    request(optionsObj, reqFunc)
}

module.exports = forecast
