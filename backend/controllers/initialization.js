// This module will initialize some dummy doctors information and will run only once to add all dummy information in database.
const Models = require('../models/index')
const dummyDataSlots = require('./helper/dummyDataSlots')

const initialization = async () => {

    const dctorsInformation = [
        {
            name: 'Dr. Manik Dalvi',
            speciality: 'Obstetrics & Gynecology',
            clinic: '7 D Bascom Ave, San Jose, CA 95128, United States',
            fees: 500,
            slotsInfo: dummyDataSlots
        },
        {
            name: 'Dr. Jane Doe',
            speciality: 'Cardiology',
            clinic: '123 Main St, New York, NY 10001, United States',
            fees: 600,
            slotsInfo: dummyDataSlots
        },
        {
            name: 'Dr. John Smith',
            speciality: 'Dermatology',
            clinic: '456 Oak St, New York, NY 10002, United States',
            fees: 550,
            slotsInfo: dummyDataSlots
        },
        {
            name: 'Dr. Amanda Johnson',
            speciality: 'Pediatrics',
            clinic: '789 Elm St, New York, NY 10003, United States',
            fees: 450,
            slotsInfo: dummyDataSlots
        }
    ]

    for (let doctorInfo of dctorsInformation) {

        const doctor = await Models.Doctors.create({ name: doctorInfo.name, speciality: doctorInfo.speciality });
        const clinic = await Models.Clinic.create({ name: doctorInfo.name, clinicAddress: doctorInfo.clinic });
        const fees = await Models.Fees.create({ name: doctorInfo.name, fees: doctorInfo.fees });
        const slots = await Models.Slots.create({name: doctorInfo.name, slots: doctorInfo.slotsInfo});
        
    }

}

module.exports = initialization;