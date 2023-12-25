const Models = require('../models/index');

const bookSlot = async (req, res) => {

    const { name, date, time } = req.body;
    console.log(name, date, time);
    const doctor = await Models.Slots.updateOne(
        { "name": name, "slots.date": date, "slots.slots.time": time },
        { "$set": { "slots.$.slots.$[elem].available": false } },
        { arrayFilters: [{ "elem.time": time }] }
    );

    res.json({
        message: "Updated successfully"
    })

}

module.exports = bookSlot;