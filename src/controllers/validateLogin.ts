import {Request, Response} from 'express'
import bcrypt from 'bcrypt'

import {User} from '../models/user'
import '../utils/mysession'

function validateLoginController(req: Request, res: Response) {
    const {username, password} = req.body;
    User.findOne({username: username}, (err: any, user: any) => {
        if (!user) return res.redirect('/auth/login');
        bcrypt.compare(password, user.password, (err, same) => {
            if (!same) return res.redirect('/auth/login');
            req.session.userId = user._id;
            return res.redirect('/');
        });
    });
}

export {validateLoginController}
