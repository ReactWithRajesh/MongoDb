const mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required',
        unique: true
    },
    mobile: {
        type: Number,
        required: 'This field is required',
        unique: true
    },
    city: {
        type: String,
        required: 'This field is required'
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;