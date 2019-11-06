const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = 3142

const app = express()

mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://db:27017/arl', { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    while (err) {
        console.log(`[Mongoose] Error: ${err}`)
        setTimeout(()=>{}, 5000)
    }
    console.log(`[Mongoose] Connected to MongoDB`)
})

app.use(express.static('public'))
app.use(bodyParser.json())

app.disable('x-powered-by')

const server = http.createServer(app)

server.listen(port, '0.0.0.0', () => {
    console.log(`[Express] Listening on ${server.address().address}:${server.address().port}`)
})