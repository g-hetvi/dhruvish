const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    content:
    {
        type: String,
        required: true
    },
    createdAt:
    {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ChatHistory', chatHistorySchema);
