import {Request, Response} from 'express'

export function contactController(req: Request, res: Response) {
    res.render('contact');
}
