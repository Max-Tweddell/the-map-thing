const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/', router)

module.exports = server
