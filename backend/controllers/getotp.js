const Models = require('../models/index')

const getotp = async (req, res) => {
    const {email} = req.body;
    const user = await Models.Usersvch.findOne({email: email})

    res.json({
        verified: 'checking',
        otp: user.otp
    })
}

module.exports = getotp;