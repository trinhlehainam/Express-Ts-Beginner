import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        console.log(err);
        user.password = hash;
        next();
    })
})

const User = model('blogpost', UserSchema);

export {User};
