const http = require('http')
const express = require('express')

const port = 3142

const app = express()

app.use(express.static('public'))

app.disable('x-powered-by')

const server = http.createServer(app)

server.listen(port, '0.0.0.0', () => {
    console.log(`[ARL-Backend] running on ${server.address().address}:${server.address().port}`)
})