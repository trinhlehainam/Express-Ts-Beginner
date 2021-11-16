import {Request, Response} from 'express'

import {BlogPost} from '../models/blogpost'

export async function getPostController(req: Request, res: Response) {
    const blogpost = await BlogPost.findById(req.params.id);
    const isLoggedIn = req.session.userId !== undefined;
    res.render('post', {blogpost, isLoggedIn});
}
