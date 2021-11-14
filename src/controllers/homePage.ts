import {Request, Response} from 'express'

import {BlogPost} from '../models/blogpost'

export async function homePageController(req: Request, res: Response) {
    const blogposts = await BlogPost.find({}); 
    res.render('index', {blogposts});
}
