const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error)
            return
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                console.log(error)
                return
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}