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

app.get('', (req, res) => {
    console.log(req.query.address)
    if (req.query.address) {
        geocode(req.query.address, (error, data) => {
            if (error) {
                res.send(error)
            }
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if (error) {
                    res.send(error)
                }

                res.render('index.hbs', {
                    title:      "Weather App",
                    name:       "Peter Morgan",
                    location:   data.location,
                    weather:    forecastData,
                })
            })
        })
    } else {
        res.render('index.hbs', {
            title:      "Weather App",
            name:       "Peter Morgan",
            location:   "",
            weather:    "",
        })
    }
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