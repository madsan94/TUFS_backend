var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = new Schema({
    a_name: String,
    a_email: {type:String,unique:true},
    a_role: String,
    a_phone_no: String,
    phone_verified: Boolean,
    OTP: String,
    a_password: String
},{collection:'users'});
module.exports  = mongoose.model('Users', Users);
