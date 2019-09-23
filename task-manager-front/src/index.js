const express = require("express")
const bcrypt = require("bcryptjs")
const hbs = require('hbs')
require("./db/mongoose")
// const userRouter = require('./routers/user')
// const taskRouter = require("./routers/task")
const indexRouter = require("./routers/index")

debugger

const app = express()
const port = process.env.PORT

//  Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())
app.use(indexRouter)
    
app.listen(port, () => {
    console.log("Server is up on port " + port)
})