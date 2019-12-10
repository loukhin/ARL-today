const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { sleep } = require('./helpers')

const port = 80

const app = express()

mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://db/arl', { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    while (err) {
        console.log(`[Mongoose] Error: ${err}`)
        sleep(5000)
    }
    console.log(`[Mongoose] Connected to MongoDB`)
})

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.disable('x-powered-by')

const server = http.createServer(app)

server.listen(port, '0.0.0.0', () => {
    console.log(`[Express] Listening on ${server.address().address}:${server.address().port}`)
})
