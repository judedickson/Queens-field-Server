var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema

var userSchema = Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})
userSchema.pre('save', (next)=>{
    var user = this;
    if (this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, (err, salt)=>{
            if (err){
                next(err);
            }
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if (err){
                    next(err);
                }
                user.password = hash;
            });
            next();
        });
    }
    next();
});


userSchema.methods.comparePassword = (password, cb)=>{
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if (err){
          cb(err);
        }
        cb(null, isMatch);
    })
}

module.exports = mongoose.model('User', userSchema);