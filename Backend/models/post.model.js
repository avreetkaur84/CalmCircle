import mongoose from 'mongoose'
import User from './user.model.js'
import Comment from './comment.model.js';

const postSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
        },
        content: {
            type: string,
            equired: true,
        },
        attachments: [{
            type: String        //URL'S of post
        }],
        reactions: {
            likes: {
                type: Number,
                default: 0
            }
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Comment
        }],
        visibility: {
            type: String,
            enum: ['public', 'friends', 'private', 'anonymous'],
            default: 'public',
        },
        tags: [{
            type: String,
        }],
    },
    {
        timestamps: true,
    }
)

const Post = mongoose.model("Post", postSchema);
export default Post;