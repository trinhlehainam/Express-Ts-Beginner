import {Request, Response, NextFunction} from 'express'

export function validateStorePostMiddleware(req: Request, res: Response, next: NextFunction){
    if(req.files == null || req.body.title == null || req.body.content == null)
        return res.redirect('/posts/new');
    next();
}
