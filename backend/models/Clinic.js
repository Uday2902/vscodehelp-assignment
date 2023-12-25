const mongoose = require('mongoose')

const ClinicSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    clinicAddress: {
        type: String,
        require: true
    }
},{timestamps: true})

module.exports = mongoose.model('Clinic', ClinicSchema);

