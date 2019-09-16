const path = require('path')        //A core node module
const express = require('express')

const app = express()

const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('/weather', (req, res) => {
    res.send({
        name:   "Peter",
        age:    29,
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

//app.com
