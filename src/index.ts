import express from "express"
import fileUpload from 'express-fileupload'
import expressSession from 'express-session'
import ejs from 'ejs'
import mongoose from 'mongoose'

import * as controller from './controllers'
import * as middleware from './middlewares'

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
app.use(expressSession({secret: "Crypto Checker"}));

app.get('/', controller.homePage);
app.get('/contact', controller.contact);
app.get('/about', controller.about);
app.get('/post/:id', controller.getPost);
app.get('/posts/new', controller.newPost);
app.post('/posts/store', middleware.validate, controller.storePost);
app.get('/auth/register', controller.register);
app.post('/users/register', controller.validateRegister);
app.get('/auth/login', controller.login);
app.post('/users/login', controller.validateLogin);
