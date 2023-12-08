const mongooose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongooose.Schema({
    username: {
        type: String, 
        required: [true, 'Username CANNOT be blank']
    },
    hashedPass: {
        type: String, 
        required: [true, 'Password CANNOT be blank']
    }
})

userSchema.statics.findAndValidate = async function(username, password){
    const foundUser = await this.findOne({username});
    const login = await bcrypt.compare(password, foundUser.hashedPass);
    return login?foundUser:false;
}

userSchema.pre('save', async function(next){
    if(!this.isModified('hashedPass')) return next();
    this.hashedPass = await bcrypt.hash(this.hashedPass, 12);
    next();
})

module.exports = mongooose.model('User', userSchema)