import {Request, Response} from 'express'

export function newPostController(req: Request, res: Response) {
    res.render('newpost');
}
