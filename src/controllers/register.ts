import {Request, Response} from 'express'

export function registerController(req: Request, res: Response) {
    res.render('register');
}
