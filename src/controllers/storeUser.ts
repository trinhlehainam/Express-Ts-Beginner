import {Request, Response, NextFunction} from 'express'

import {User} from '../models/user'

export async function storeUserController(req: Request, res: Response, next: NextFunction){
    User.create(req.body, (err: any) => {
        console.log(err);
        res.redirect('/');
    }) 
}
