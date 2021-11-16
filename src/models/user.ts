import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username: {
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
        user.password = hash;
        next();
    })
})

const User = model('user', UserSchema);

export {User};
