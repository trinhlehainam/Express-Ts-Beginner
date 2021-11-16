import {Request, Response} from 'express'

import {BlogPost} from '../models/blogpost'
import '../utils/mysession'

export async function homePageController(req: Request, res: Response) {
    const blogposts = await BlogPost.find({}); 
    console.log(req.session);
    const isLoggedIn = req.session.userId !== undefined;
    res.render('index', {blogposts, isLoggedIn});
}
