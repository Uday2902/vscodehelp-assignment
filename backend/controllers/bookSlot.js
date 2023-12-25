const Models = require('../models/index');
const nodemailer = require('nodemailer')

const generateRandomString = () => {
    const characters = '0123456789';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
};

const sendVerificationEmail = (userEmailAddress, generatedOTP, name, date, time) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_ADDRESS_PASSWORD
        }
    });
    let mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: userEmailAddress,
        subject: 'Email address verification for Booking Slot',
        text: `Thanks for joining us! This is your email verification otp - ${generatedOTP} your booking details : Doctor : ${name}, Date: ${date}, Time: ${time}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

const bookSlot = async (req, res) => {

    const { name, date, time, email } = req.body;
    console.log(name, date, time);
    const doctor = await Models.Slots.updateOne(
        { "name": name, "slots.date": date, "slots.slots.time": time },
        { "$set": { "slots.$.slots.$[elem].available": false } },
        { arrayFilters: [{ "elem.time": time }] }
    );
    const generatedOTP = await generateRandomString();
    const user = Models.Usersvch.create({email: email, otp: generatedOTP})
    await sendVerificationEmail(email, generatedOTP, name, date, time)

    res.json({
        message: "Updated successfully"
    })

}

module.exports = bookSlot;