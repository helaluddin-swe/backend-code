const express=require("express")
const session=require("express-session")
const bcrypt=require("bcrypt")
const app=express()
const PORT=5006
app.use(session({
  secret:"simple-secret",resave:false,saveUninitialized:false
}))
const users=[]
app.use(express.json())
app.post('/register',async(req,res)=>{
  const {username,password}=req.body
  const hashedPassword=await bcrypt.hash(password,10)
  users.push({
    username,password:hashedPassword
  })
  res.send("User registered")
})
app.post('/login',async(req,res)=>{
  const {username,password}=req.body
  const user= users.find(u=>u.username===username)
  if(!user || !(await bcrypt.compare(password,user.password))){
   return res.send("not authorized")
  }
  req.session.user={username: user.username}
  res.send("User logged in")
})
app.get('/dashboard',async(req,res)=>{
  if(!req.session.user){
    return res.send("unauthorized")
  }
  res.send(`Welcome to your dashboard  ${req.session.user.username}`)
})

app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
})