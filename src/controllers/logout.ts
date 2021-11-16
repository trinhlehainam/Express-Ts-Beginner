import {Request, Response} from 'express'

export function logoutController(req: Request, res: Response) {
    req.session.destroy(() => {res.redirect('/')});
}
