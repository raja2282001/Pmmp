const mongoose=require("mongoose")
const Schema=mongoose.Schema

const fileSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    url:{
        type:String
    },
    type:{
        type:String
    }
})

module.exports=mongoose.module("fileuplode",fileSchema)