import express from "express"
import ejs from 'ejs'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'

import * as controller from './controllers'

mongoose.connect('mongodb://localhost/my_database');

const app = express();
const port = 3001;

console.log(`Listen to ${port}`);
app.listen(port);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
app.use('/posts/store', controller.validateMiddleware);

app.get('/', controller.homePage);
app.get('/contact', controller.contact);
app.get('/about', controller.about);
app.get('/post/:id', controller.getPost);
app.get('/posts/new', controller.newPost);
app.post('/posts/store', controller.store);
