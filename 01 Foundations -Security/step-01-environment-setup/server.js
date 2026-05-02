const express=require('express')
const app=express()
const PORT=5001
app.get('',(req,res)=>{
  res.send(" API is running")
})
// middleware for parse json data 
app.use(express.json())
app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
})