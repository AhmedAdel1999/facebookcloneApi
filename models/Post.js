const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    imgs: {
        type: Array,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        },
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
            tag: Object,
            reply: Schema.Types.ObjectId,
            text: {
                type: String,
                required: true,
            },
            name: {
                type: String,
            },
            username: {
                type: String,
            },
            profileImage: {
                type: String,
            },
            likes: [
                {
                    user: {
                        type: Schema.Types.ObjectId,
                        ref: 'user',
                    },
                },
            ],
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
