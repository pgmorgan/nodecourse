const express = require('express')
const path = require('path')

const router = new express.Router()



router.get('/', (req, res) => {
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

module.exports = router