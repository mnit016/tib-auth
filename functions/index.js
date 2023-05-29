/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions")

const express = require('express')
const webApp = express()

webApp.use(express.urlencoded({ extended: true }))
webApp.use(express.json())

const key = "tib4972"
webApp.get('/auth/:key', (req, res) => {
    if (req.params.key == key) {
        res.send("success")
    } else {
        res.status(403).send("forbidden")
    }
})

webApp.get('/',(req, res) => {
    res.send("hello, world!")
})

exports.webApp = functions.https.onRequest(webApp);

