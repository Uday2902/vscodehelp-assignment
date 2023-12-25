const mongoose = require('mongoose')

const DoctorsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    speciality: {
        type: String,
        require: true
    }
},{timestamps: true})

module.exports = mongoose.model('Doctors', DoctorsSchema);

