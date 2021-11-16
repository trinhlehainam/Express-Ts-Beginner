import {Request, Response, NextFunction} from 'express'

import {User} from '../models/user'

export async function validateRegisterController(req: Request, res: Response, next: NextFunction){
    User.create(req.body, (err: any) => {
        if (err) {
            console.log(err);
            return res.redirect('/auth/register');
        }
        res.redirect('/');
    }) 
}
