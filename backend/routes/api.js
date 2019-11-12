const express = require('express')
const timeTable = require('../models/timetable')

const router = express.Router()

require('./api-get')(router)
require('./api-post')(router)

module.exports = router