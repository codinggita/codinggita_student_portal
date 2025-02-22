import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    role: { type: String, required: true },

    Portfolio_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portfolio',
    },

    Group_id: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Portfolio',
        }]
    },

    Batch: { type: String, required: true },

})

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


// Generate JWT
userSchema.methods.generateToken = function (Data) {
    return jwt.sign({ id: this._id, ...Data }, process.env.JWT_SECRET, { expiresIn: "48h" });
};

export const User = mongoose.model('user', userSchema)