import {Schema, model} from 'mongoose'

const BlogPostSchema = new Schema({
    title: String,
    content: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    imgPath: String
});

const BlogPost = model('blogpost', BlogPostSchema);

export {BlogPost};
