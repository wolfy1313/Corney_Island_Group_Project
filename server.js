const express = require('express')
const routes = require('./routes')
const db = require('./db')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const logger = require('morgan')
const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))
app.use(express.urlencoded({ extended: false }))

// app.use('/', routes)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => {
  console.log(`Corney Island 🌽🎢 listening on port: ${PORT}`)
})
