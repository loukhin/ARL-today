const express = require('express')
const timeTable = require('../models/timetable')

const router = express.Router()

router.get('/get/:originId/:destination/:time?', (req, res) => {
    const { originId, destination, time } = req.params
    const destinationId = (destination > originId) ? 8 : 1
    const query = timeTable.where({ originId, destinationId })
    query.findOne((err, data) => {
        if (err) console.log(err)
        if (data !== null && typeof data !== 'undefined') {
            const timeData = ([0, 6].includes(new Date().getDay())) ? data.timeHoliday : data.timeNormal
            const price = 15 + (Math.abs(originId - destination) - 1) * 5

            filteredTime = []
            let hour, currentHour, currentMin

            if (typeof time !== 'undefined') {
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
                    if ((currentMin <= min && hour == currentHour)
                        || (currentMin >= min && hour != currentHour)) {
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