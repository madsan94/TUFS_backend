var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Models = new Schema({
Device:{type:String,unique:true},
model:String,
issue:String,
price:String
},{collection:'Models'});
module.exports  = mongoose.model('Models', Models);
