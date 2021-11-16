import {Request, Response} from 'express'
import bcrypt from 'bcrypt'

import {User} from '../models/user'
import '../utils/mysession'

function validateLoginController(req: Request, res: Response) {
    const {username, password} = req.body;

    // NOTE:Save login data to flash and restore to login if validation's fail
    req.flash('data', req.body);

    if (username == '') {
        req.flash('validationErrors', 'Please enter username');
        return res.redirect('/auth/login');
    }
    if (password == '') {
        req.flash('validationErrors', 'Please enter password');
        return res.redirect('/auth/login');
    }
    User.findOne({username: username}, (err: any, user: any) => {
        if (!user) {
            req.flash('validationErrors', 'Invalid username');
            return res.redirect('/auth/login');
        }
        console.log(user);
        bcrypt.compare(password, user.password, (err, same) => {
            if (!same) {
                req.flash('validationErrors', 'Invalid password');
                return res.redirect('/auth/login');
            }
            req.session.userId = user._id;
            return res.redirect('/');
        });
    });
}

export {validateLoginController}
