const express = require('express')
const route = express.Router()
const keyModel = require('../models/keyModel')

route.get('/', (req, res) => {
    const keys = keyModel.findKeys()
    res.status(200).json(keys)
})

route.get('/new', (req, res) => {
    const newKey = keyModel.createKey()
    res.status(200).json(newKey)
})

module.exports = route