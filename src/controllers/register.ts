import {Request, Response} from 'express'

export function registerController(req: Request, res: Response) {
    const isLoggedIn = req.session.userId !== undefined;
    res.render('register', {isLoggedIn, errors: req.flash('validationErrors')});
}
