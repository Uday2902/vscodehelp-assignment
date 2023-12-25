const mongoose = require('mongoose')

const FeesSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    fees: {
        type: Number,
        require: true
    }
},{timestamps: true})

module.exports = mongoose.model('Fees', FeesSchema);

