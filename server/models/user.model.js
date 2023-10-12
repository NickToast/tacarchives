const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true
    },
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [8, 'Password must be at least 6 characters']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

/*Confirm Password
We do not want to the confirm password to be saved into our database
By using mongoose virtuals - fields we don't want to save in MongoDB, we can chain calls
to get and set to the returned virtual object, allowing us to get both a getter and setter for the virtual field*/
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value);

//Another middleware to add in another validation using pre-hook to run before validations
/* Next function for middleware - when our middleware has completed its function, we need to call the next() function
to have the middleware or next function to run*/
UserSchema.pre('validate', function(next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

/* Bcrypt
Using NPM we can install this with npm i bcrypt
We make use of a pre-hook again, just this time, we set it to before the User is saved into the database
The 10 in bcrypt.hash() refers to the number of salt rounds that Bcrypt will use when generating a salt
*/
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model('User', UserSchema)
module.exports = User