const mongoose = require('mongoose');
const Joi = require('joi');

const channelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    channel: {
        type: String
    }
})

const Order = mongoose.model('Channel', channelSchema);

exports.channelSchema = channelSchema;
exports.Channel = Channel;