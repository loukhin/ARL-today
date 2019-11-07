const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeTableSchema = new Schema({
    originEN: String,
    destinationEN: String,
    originTH: String,
    destinationTH: String,
    timeNormal: {
        type: Map,
        of: Array
    },
    timeHoliday: {
        type: Map,
        of: Array
    }
})

module.exports = mongoose.model('timeTable', timeTableSchema, 'timeTable')