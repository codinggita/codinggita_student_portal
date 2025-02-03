import mongoose from 'mongoose';


const eventSchema = new mongoose.Schema({

    date: {
        type: String,
        required: true
    },
    eventTitle: {
        type: String,
        required: true
    },
    eventLocation: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true,
})


export const Event = mongoose.model('Event', eventSchema)