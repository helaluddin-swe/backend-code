const cookieParser = require("cookie-parser")
const express=require("express")
const app=express()
const PORT=5005

app.use(cookieParser())
app.get("/fetch",(req,res)=>{
  res.cookie("name","Helal Uddin",{maxAge:600000})
  res.send("Cookie created")
})
app.get('/',(req,res)=>{
  res.send(" app is running")
})
// cookie cleared
app.get("/remove",(req,res)=>{
  res.clearCookie("name")
  res.send("cookie cleared")
})

app.listen(PORT,()=>{
  console.log(`server runnin on http://localhost:${PORT}`)
})