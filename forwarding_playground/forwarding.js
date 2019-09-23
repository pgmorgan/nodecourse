const express = require("express")
const userRouter = require("./user")
const handler = require("./handler")

const app = express()
const port = 3001

app.use(express.json())
app.use(userRouter)
app.use(handler)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})