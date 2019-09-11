const path = require('path')        //A core node module
const express = require('express')

const app = express()

const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('/help', (req, res) => {
    res.send({
        name:   "Peter",
        age:    29,
    })
})

app.get('/about', (req, res) => {
    res.send('About page.')
})

app.get('/weather', (req, res) => {
    res.send('<h1>Weather page</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

//app.com
