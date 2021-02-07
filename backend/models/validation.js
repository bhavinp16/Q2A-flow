const mongoose = require('mongoose');
const Joi = require('joi');

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        maxlength: 10,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        maxlength: 1024,
        required: true
    }
})

const Email = mongoose.model('Email', emailSchema);

function validateEmail(email) {
    const schema = {
        email: Joi.string().max(10).required(),
        password: Joi.string().min(3).max(15).required()    
    };
    return Joi.validate(email, schema);
}

exports.emailSchema = emailSchema;
exports.Email = Email;
exports.validate = validateEmail;