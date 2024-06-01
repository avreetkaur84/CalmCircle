import mongoose from "mongoose";
import Post from "./post.model,js";
import User from "./user.model.js";

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Post
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },
        content: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;