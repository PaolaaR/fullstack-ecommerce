const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    dob: { type: Date, required: true },
    mail: { type: String },
    password: { type: String }
})

const User = mongoose.model('User', userSchema)
module.exports = User