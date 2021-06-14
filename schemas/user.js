const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    _id: String,
    blacklisted: Boolean,
});

module.exports = model('user', userSchema);