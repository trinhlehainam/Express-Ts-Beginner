import {Request, Response} from 'express'

import {BlogPost} from '../models/blogpost'

export async function getPostController(req: Request, res: Response) {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', {blogpost});
}
