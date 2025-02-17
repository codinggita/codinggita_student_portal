import mongoose from 'mongoose';


const portfolioSchema = new mongoose.Schema({


    Name: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    ProfileImage: {
        type: String,
    },

    Socials: {
        type: Object
    },

    Location: {
        type: String,
    },

    Aboutme: {
        type: String,
    },

    Skills: {
        type: [{
            Skill: { type: String, required: true },
            Rating: { type: Number, required: true },
        }],
        required: true
    },

    Education: {
        type: [{
            nameofInstitiute: { type: String, required: true },
            course: { type: String, required: true },
            year: { type: String, required: true }
        }],
        required: true
    },


    Internships: {
        type: [{
            Company: { type: String, required: true },
            Role: { type: String, required: true },
            year: { type: String, required: true },
            Description: { type: String, required: true }
        }],
        required: true
    },

    Certificates: {
        type: Array,
        required: true
    },

    Projects: {
        type: [{
            Title: { type: String, required: true },
            Github: { type: String, required: true },
            Figma: { type: String, required: true },
            Documentation: { type: String, required: true },
            Description: { type: String },
            Images: { type: Array, required: true }
        }],
        required: true
    },



}, {
    timestamps: true,
})


export const portfolioForm = mongoose.model('Portfolio', portfolioSchema)