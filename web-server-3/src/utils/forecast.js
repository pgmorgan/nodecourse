const request = require('request')

const forecast = (latitude, longitude, callback) => {
    let url = "https://api.darksky.net/forecast/ed767fa21dcc5d438e0776ec3ff85082/" 
    url += latitude + "," + longitude + "?units=si&lang=en"
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (response.body.error) {
            callback('Incomplete or incorrect location input provided.  Unable to find location.', undefined)
        } else {
            let msg
            msg = response.body.daily.data[0].summary
            msg += " It is currently " + response.body.currently.temperature + " C degrees out."
            msg += "  There is a " + response.body.currently.precipProbability + "% chance of rain."
            callback(undefined, msg)
        }
    })
}

module.exports = forecast
