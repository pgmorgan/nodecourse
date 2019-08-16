const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const app = express()

//  Define paths for Express configuration
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//  Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//  Setup static directory to serve
app.use(express.static(publicPath))


// const address = process.argv[2]

const callback = (obj) => {
    res.render('index.hbs', obj)
}

const weatherForecast = (address, callback) => {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error)
            return undefined
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                console.log(error)
                return undefined
            }
            // console.log("Made it to here")
            // console.log(data.location)
            // console.log(forecastData)

            let obj = {
                location:   data.location,
                forecast:   forecastData,
            }
            console.log(obj)

            return obj
            // console.log(data.location)
            // console.log(forecastData)

            
        })
    })
}

app.get('', (req, res) => {
    let obj

    console.log(req.query.address)
    if (req.query.address) {
        
        // obj["weather"] = weatherForecast(req.query.address)
        obj = {
            title:      "Weather App",
            name:       "Peter Morgan",
            weather:    weatherForecast(req.query.address)   
        }
    } else {
        obj = {
            title:      "Weather App",
            name:       "Peter Morgan",
            weather:    {
                location:   "",
                forecast:   "",
            },
        }
    }
    res.render('index', obj)
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title:  "About Me",
        name:   "Peter Morgan"
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error:  'You must provide a search term'
        })
        return
    } 
    console.log(req.query.search)
    res.send({
        products:   [],
    })
})

app.get('*', (req, res) => {
    res.render('404.hbs', {
        title:  "Error 404: Page Not Found",
        name:   "Peter Morgan"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})