import mongoose from 'mongoose';




const groupSchema = new mongoose.Schema({

    group_id: {
        type: _id,
        required: true
    },

    group_name: {
        type: String,
        required: true
    },

    users: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }]
    },

    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }

})


export const User = mongoose.model('group', groupSchema)