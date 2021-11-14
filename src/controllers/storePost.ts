import path from 'path'

import {Request, Response, NextFunction} from 'express'
import fileUpload from 'express-fileupload'

import {BlogPost} from '../models/blogpost'

export async function storePostController(req: Request, res: Response, next: NextFunction) {
    const image = req.files ? req.files.image : undefined;
    if(!image) return next();
    if(!isSingleFile(image)) return next();
    try {
        await image.mv(path.resolve(__dirname, 'public/img/', image.name));
        await BlogPost.create({
            ...req.body,
            imgPath: `/img/${image.name}`
        });
    }
    catch(err){
        console.log(err);
    }
    res.redirect('/');
}

function isSingleFile(file: any): file is fileUpload.UploadedFile {
    return 'name' in file;
}
