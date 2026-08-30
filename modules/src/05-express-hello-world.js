const express=require("express")
const app=express()
app.get("/hello-world",(req,res)=>{
  res.send("Hello World From Express and Nodejs simple application ")
})

const port=4000
app.listen(port,()=>{
  console.log(`server run at : http://localhost:${port}`)
})