const request = require('request')

// const urlMapbox = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGV0ZXJnbTEiLCJhIjoiY2p6YTAwcXNoMDB1ZzNtbzZ1OTR6aW1tdiJ9.sGjVElKrCqYJ02eTei_gNg"
const urlMapbox = "https://api.mapbox.com/geocoding/v5/mapbox.places/Toronto.json?access_token=pk.eyJ1IjoicGV0ZXJnbTEiLCJhIjoiY2p6YTAwcXNoMDB1ZzNtbzZ1OTR6aW1tdiJ9.sGjVElKrCqYJ02eTei_gNg&limit=1"
const urlDarksky = "https://api.darksky.net/forecast/ed767fa21dcc5d438e0776ec3ff85082/37.8267,-122.4233?units=si&lang=es"

request({ url: urlMapbox, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to Mapbox service for Geocoding.')
    } else if (response.body.message === "Not Found" ||
                response.body.features === undefined ||
                response.body.features.length === 0) {
        console.log('Unable to locate the location provided. Message 1')
    } else {
        let coords
        const lng = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        console.log(lng + ", " + lat)
    }
})

request({ url: urlDarksky, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.error) {
        console.log('Incomplete or incorrect location input provided.  Unable to find location.')
    } else {
        let msg
        msg = response.body.daily.data[0].summary
        msg += " It is currently " + response.body.currently.temperature + " C degrees out."
        msg += "  There is a " + response.body.currently.precipProbability + "% chance of rain."
        console.log(msg)
    }
})