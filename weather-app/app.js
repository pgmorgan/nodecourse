const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
    return
}

const geocodeCallback = (error, geoData) => {
    if (error) {
        console.log(error)
        return
    }
    forecast(geoData, forecastCallback)
}

const forecastCallback = (error, geoLocation, forecastMsg) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(geoLocation)
    console.log(forecastMsg)
}

geocode(address, geocodeCallback)


// geocode(address, (error, data) => {
//     if (error) {
//         console.log(error)
//         return
//     }
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             console.log(error)
//             return
//         }
//         console.log(data.location)
//         console.log(forecastData)
//     })
// })

// const request = require('request')

// const latitude = 45
// const longitude = 45
// let forecastURL = "https://api.darksky.net/forecast/ed767fa21dcc5d438e0776ec3ff85082/" 
// forecastURL += latitude + "," + longitude + "?units=si&lang=en"

// const forecastOptions = {
//     url:    forecastURL,
//     json:   true,
// }

// const forecastFunc = (error, response) => {
//     let outputMsg = ""
//     outputMsg += response.body.daily.data[0].summary
//     outputMsg += " It is currently " + response.body.currently.temperature
//     outputMsg += " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain."
//     console.log(outputMsg)
// }

// request(forecastOptions, forecastFunc)

// //----------------------------------------

// address = "los angeles"
// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicGV0ZXJnbTEiLCJhIjoiY2p6YTAwcXNoMDB1ZzNtbzZ1OTR6aW1tdiJ9.sGjVElKrCqYJ02eTei_gNg&limit=1"

// const geocodeOptions = {
//     url:    geocodeURL,
//     json:   true,
// }

// const geocodeFunc = (error, response) => {
//     let outputMsg = ""
//     outputMsg += "latitude: " + response.body.features[0].center[1]
//     outputMsg += "\nlongitude: " + response.body.features[0].center[0]
//     console.log(outputMsg)
// }

// request(geocodeOptions, geocodeFunc)
