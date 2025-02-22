import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    group_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the 'User' model
    }],
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the 'User' model
        required: true
    }
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

export const Group = mongoose.model('Group', groupSchema);