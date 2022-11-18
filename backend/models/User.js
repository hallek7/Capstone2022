const mongoose = require('mongoose');
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const algorithm = 'AES-128-CBC';
const key ='passwordpasswordpasswordpassword';
const iv ='vectorvector1234';

const UserSchema = new mongoose.Schema({
email:{
    type: 'string',
    lowercase: true,
    unique:  true,
    required: [true, 'please enter email'],
    match: [/\S+@\S+\.\S+/, 'invalid'],
    index : true
},
password: {
    type: 'string',
    required: [true, 'please enter password']
},
tokens: [],
articles:[]
})

UserSchema.method.generateHaah = function(password){
    let cipher = crypto.createCipheriv(algorithm,Buffer.from(key),Buffer.from(iv));
    let crypted = cipher.update(password,'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
};

UserSchema.method.generateHaah = function(password){
    let decipher = crypto.createCipheriv(algorithm,Buffer.from(key),Buffer.from(iv));
    let decrypted = decipher.update(this.password,'hex', 'utf8');
    decrypted += decipher.final();
    return (password==decrypted);
};

module.exports=mongoose.model('User', UserSchema);

/*UserSchema.pre('save', function(next){
const user = this;
//if user pwd is not modified in mondgodb return next
if(!user.isModified('password')) return next();
// we need to modify the yser password, hash and salt the password 
// using bcrypt 
bcrypt.genSalt(10, function(err, salt){
    if(err) return next(err); 
    bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err); // if there's error
            // if no error 
            user.password = hash;
            next();
})
})
})*/

const user = mongoose.model('user', UserSchema);
module.exports = user;
