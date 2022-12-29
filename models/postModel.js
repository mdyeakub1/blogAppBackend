const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    body: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        default: "admin"
    },
    category: {
        type: Array,
        required: false
    },
    photo: {
        type: String
    }
}, {
    timestamps: true
});

const postModel = mongoose.model("Post", postSchema)

module.exports = postModel