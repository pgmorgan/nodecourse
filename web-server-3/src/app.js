const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index.hbs', {
        loggedIn:       true,
        task:   [{
            description:    "One",
            completed:      false,
        },{
            description:    "Two",
            completed:      true,
        },{
            description:    "Three",
            completed:      false,
        }],
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})