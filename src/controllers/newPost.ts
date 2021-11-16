import {Request, Response} from 'express'

export function newPostController(req: Request, res: Response) {
    const isLoggedIn = req.session.userId !== undefined;
    res.render('newpost', {isLoggedIn});
}
