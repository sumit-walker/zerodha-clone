const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// const activitySchema= require("../schemas/OrdersSchema.js")


const userSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    activities:[
        {
            name:String,
            qty:Number,
            price:Number,
            model:String,
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    }

});


module.exports = mongoose.model("user",userSchema)