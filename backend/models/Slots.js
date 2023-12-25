const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
});

const DateSlotSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    slots: [SlotSchema]
});

const SlotsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slots: [DateSlotSchema]
}, {timestamps: true});

module.exports = mongoose.model('Slots', SlotsSchema);
