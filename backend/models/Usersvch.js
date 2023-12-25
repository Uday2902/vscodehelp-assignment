const mongoose = require('mongoose')

const UsersVCHSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    otp: {
        type: String,
        require: true
    }
},{timestamps: true})

module.exports = mongoose.model('Usersvch', UsersVCHSchema);

