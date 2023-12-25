const Models = require('../models/index');

const doctorInfo = async (req, res) => {

    const { name } = req.params;

    const clinicInfo = await Models.Clinic.findOne({name: name});
    const doctorInfo = await Models.Doctors.findOne({name: name});
    const feesInfo = await Models.Fees.findOne({name: name});
    const slotsInfo = await Models.Slots.findOne({name: name});

    res.json({
        name: doctorInfo.name,
        speciality: doctorInfo.speciality,
        clinic: clinicInfo.clinicAddress,
        fees: feesInfo.fees,
        slots: slotsInfo.slots
    })

}

module.exports = doctorInfo;