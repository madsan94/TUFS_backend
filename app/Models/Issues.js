var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Issues = new Schema({
Device:{type:String,unique:true},
Issue:String
},{collection:'Issues'});
module.exports  = mongoose.model('Issues', Issues);
