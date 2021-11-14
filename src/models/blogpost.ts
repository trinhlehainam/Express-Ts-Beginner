import {Schema, model} from 'mongoose'

const BlogPostScenma = new Schema({
    title: String,
    content: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    imgPath: String
});

const BlogPost = model('blogpost', BlogPostScenma);

export {BlogPost};
