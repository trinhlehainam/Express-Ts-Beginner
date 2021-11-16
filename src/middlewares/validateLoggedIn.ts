import {Request, Response, NextFunction} from 'express'

import '../utils/mysession'

function validateLoggedInMiddleware(req: Request, res: Response, next: NextFunction) {
    if (!req.session.userId) return res.redirect('/auth/login');
    next();
}

export {validateLoggedInMiddleware}
