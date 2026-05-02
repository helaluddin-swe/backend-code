import express from "express";
import mongoose from "mongoose";
const app=express()
const PORT=5003
const MONGO_URI='mongodb+srv://connectDB:connectDB123@connectdb.tfi99ln.mongodb.net/connectDB?appName=connectDB'
mongoose.connect(MONGO_URI).then(()=>{
  console.log("Database connected",MONGO_URI)
})
app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
})