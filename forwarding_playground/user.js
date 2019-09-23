const express = require("express")

const router = new express.Router()

router.get("/users", (req, res) => {
    const obj = {
        name:   "Peter",
        email:  "petergm@gmail.com",
    }
    res.status(201).send(obj)
})

module.exports = router
