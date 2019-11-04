const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeTableSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    isExpress: Boolean,
    originEN: String,
    destinationEN: String,
    originTH: String,
    destinationTH: String,
    time: {
        type: Map,
        of: Array
    }
})

module.exports = mongoose.model('timeTable', timeTableSchema, 'timeTable')