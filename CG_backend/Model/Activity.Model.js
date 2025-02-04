import mongoose from 'mongoose';

const activitySchema = mongoose.Schema({
    activityDate: {
        type: String,
        required: true
    },
    activityType: {
        type: String,
        required: true
    },
    activityPoints: {
        type: Number,
        required: true
    },
    organisedBy: {
        type: String,
        required: true
    },
    activity: {
        type: [{
            team: { type: String, required: true },
            points: { type: Number, required: true }
        }],
        required: true
    }

})


export const Activity = mongoose.model("Activity", activitySchema) 