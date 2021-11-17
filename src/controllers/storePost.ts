import path from 'path'

import {Request, Response, NextFunction} from 'express'
import fileUpload from 'express-fileupload'

import {BlogPost} from '../models/blogpost'

//TODO: add check multiple files
export async function storePostController(req: Request, res: Response, next: NextFunction) {
    const image = req.files ? req.files.image : undefined;
    if(!image) return res.redirect('/');
    if(!isSingleFile(image)) return res.redirect('/');
    try {
        //TODO: handle dirpath correctly
        await image.mv(path.resolve('./public/img/', image.name));
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
