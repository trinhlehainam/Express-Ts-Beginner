import {Request, Response} from 'express'

export function loginController(req: Request, res: Response) {
    const isLoggedIn = req.session.userId !== undefined;
    res.render('login', {isLoggedIn});
}
