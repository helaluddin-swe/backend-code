import mongoose from "mongoose";
const PersonSchema=new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true, unique:true},
  age:{type:Number,required:true}

},{timestamps:true})
export const Person=mongoose.model('Person',PersonSchema)