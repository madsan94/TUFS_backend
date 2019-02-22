var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var otp = new Schema({
    number:{unique:true,type:String},
    otp:String,
    verified:Boolean
},{collection:'OTP'});
module.exports  = mongoose.model('otp', otp);
