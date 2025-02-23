import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({
    task_title: { type: String, required: true },
    due_date: { type: Date, required: true },
    Priority: { type: String, enum: ["High", "Medium", "Low"], required: true },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Ensure this matches the name of the User model
        required: true
    }
});


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
        ref: 'user',
    }],
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    tasks: [taskSchema] 

}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

export const Group = mongoose.model('Group', groupSchema);