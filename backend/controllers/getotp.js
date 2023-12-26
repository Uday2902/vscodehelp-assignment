const Models = require('../models/index')

const getotp = async (req, res) => {
    const {email} = req.body;
    const user = await Models.Usersvch.findOne({email: email})
    const otp = user.otp
    const userDeleted = await Models.Usersvch.deleteOne({email: email})
    res.json({
        verified: 'checking',
        otp: otp
    })
}

module.exports = getotp;