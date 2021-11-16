import {Schema, model} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please enter username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
    }
});

UserSchema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    })
})

UserSchema.plugin(uniqueValidator);

const User = model('user', UserSchema);

export {User};
