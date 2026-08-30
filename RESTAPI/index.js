const express=require("express")
const petRoutes=require("./pets/routes/pets.routes.js")
const app=express()
const port=8000
const cors=require("cors")

// global middleware
app.use(express.json())
app.use(cors())

// routes
app.get("/",(req,res)=>{
  res.send("api running")
})

// local routes
app.use("/pets",petRoutes)

app.listen(port,()=>{
  console.log(`server started:${port}`)
})