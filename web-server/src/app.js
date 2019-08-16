const express = require('express')
const path = require('path')
const hbs = require('hbs')

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

app.get('', (req, res) => {
    res.render('index', {
        title:  "Weather App",   
        name:   "Peter Morgan",
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title:  "About Me",
        name:   "Peter Morgan"
    })
})

app.get('*', (req, res) => {
    res.send('My 404 page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})