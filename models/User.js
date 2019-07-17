const mongoose = require('mongoose')

const UserSchema = new mongoose.schema({
    name: {
        type: String,
        reuired: true
    },
    email: {
        type: String,
        reuired: true
    },
    password: {
        type: String,
        reuired: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;