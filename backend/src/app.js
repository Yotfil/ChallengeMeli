const cors = require('cors')
const express = require('express')

// //Routes
const router = require('./routes/items.routes')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)

module.exports = app
