var mongoose= require('mongoose')
var Schema=mongoose.Schema
var Inventory=new Schema({
    material:{type:String,unique:true},
    quantity:String

},{collection:'Inventory'});
module.exports=mongoose.model('Inventory',Inventory);