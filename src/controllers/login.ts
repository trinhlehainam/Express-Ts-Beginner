import {Request, Response} from 'express'

export function loginController(req: Request, res: Response) {
    const isLoggedIn = req.session.userId !== undefined;
    const data = req.flash('data')[0] as any;
    let username = '';
    let password = '';
    if (data){
        username = data.username;
        password = data.password;
    }
    console.log(data);
    res.render(
        'login', 
        {
            isLoggedIn, 
            errors: req.flash('validationErrors'),
            username: username, 
            password: password});
}
