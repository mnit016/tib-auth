'use strict'

const util = require('util')
const key = 'tib4972'

module.exports = {
    get: (req, res) => {
        if (req.params.key == key) {
            res.send("success")
        } else {
            res.status(403).send("forbidden")
        }
    }
}