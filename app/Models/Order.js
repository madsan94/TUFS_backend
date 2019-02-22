var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Orders=new Schema({
    Order_Number:{type:String,unique:true},
    Order_Type:String,//L=Laptop,M=Mobile/Tablet
    User_Id:String, //Email ID or Phone Number
    Creation_Date:String,
    Status:String,//O-Ordered P-Processing D-Done
    Assigned:String,
    Price:String,
    Issue:String
},{"collection":"Orders"})
module.exports = mongoose.model('Orders',Orders);