const mongoose=require('mongoose')
const signUpTemplate=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    // username:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    // Phone:{
    //     type:Number,
    //     required:true,
    //     unique:true
    // },
date:{
   type:Date,
   default:Date.now
}
}) 
module.exports=mongoose.model('yes',signUpTemplate);