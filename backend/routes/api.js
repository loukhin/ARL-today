const express = require('express')
const timeTable = require('../models/timetable')
const { calculatePrice, isHoliday } = require('./helpers')

const router = express.Router()

router.get('/get/:originId/:destination/:time/:dayType?', (req, res) => {
    const { originId, destination, time, dayType } = req.params
    const destinationId = (destination > originId) ? 8 : 1
    const query = timeTable.where({ originId, destinationId })
    query.findOne((err, data) => {
        if (err) console.log(err)
        if (
            data !== null && typeof data !== 'undefined'
            && (time === 'now' || typeof dayType !== 'undefined')
        ) {
            let timeData
            if (time === 'now') {
                timeData = (isHoliday(time)) ? data.timeHoliday : data.timeNormal
            } else {
                timeData = (dayType === 'holiday') ? data.timeHoliday : data.timeNormal
            }

            const price = calculatePrice(originId, destination)

            filteredTime = []
            let hour, currentHour, currentMin

            if (time !== 'now') {
                hour = parseInt(time)
                currentHour = parseInt(time)
                currentMin = 0
            } else {
                hour = new Date().getHours()
                currentHour = new Date().getHours()
                currentMin = new Date().getMinutes()
            }

            for (let key of timeData.keys()) {
                if (!(hour <= parseInt(key) && parseInt(key) <= hour + 1)) {
                    timeData.delete(key)
                }
            }

            timeData.forEach((mins, hour) => {
                mins.forEach(min => {
                    if (
                        (currentMin <= min && hour == currentHour)
                        || (currentMin >= min && hour != currentHour)
                    ) {
                        filteredTime.push(`${hour}:${min}`)
                    }
                })
            })

            filteredTime.sort((a, b) => {
                a = parseInt(a)
                b = parseInt(b)
                return a - b
            })

            res.status(200).json({ status: 200, price, time: filteredTime })
        } else {
            res.status(404).json({ status: 404 })
        }
    })
})

module.exports = router
