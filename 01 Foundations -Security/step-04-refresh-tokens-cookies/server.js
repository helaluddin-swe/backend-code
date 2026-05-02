const cookieParser = require("cookie-parser")
const express=require("express")
const session=require("express-session")
const app=express()
const PORT=5005

app.use(cookieParser())
app.use(session({
  secret:"simple-secret",
  resave:false,
  saveUninitialized:false,

}))


app.get('/',(req,res)=>{
  res.send(" app is running")
})

app.get('/visit',(req,res)=>{
  if(req.session.page_views){
    req.session.page_views++;
    res.send(`You visited this page ${req.session.page_views} times`)
  }else{
    req.session.page_views=1;
    res.send("Welcome your visit first time")
  }
})
app.get('/remove-visit',(req,res)=>{
  req.session.destroy()
  res.send("session removed")
})
// // login cookie
// app.get("/fetch",(req,res)=>{
//   res.cookie("name","Helal Uddin",{maxAge:600000})
//   res.send("Cookie created")
// })
// app.get('/login', (req, res) => {
//     res.cookie('username', 'Alice', {
//         maxAge: 900000, // Expires in 15 minutes (in milliseconds)
//         httpOnly: true, // Prevents client-side JS from reading the cookie (XSS protection)
//         secure: true,   // Only sent over HTTPS
//         sameSite: 'lax' // Prevents CSRF attacks
//     });
//     res.send('Cookie has been set!');
// });
// app.get('/profile', (req, res) => {
//     const { username } = req.cookies;
//     if (username) {
//         res.send(`Welcome back, ${username}!`);
//     } else {
//         res.status(401).send('No cookie found. Please log in.');
//     }
// });
// // cookie cleared
// app.get("/remove",(req,res)=>{
//   res.clearCookie("name")
//   res.send("cookie cleared")
// })

app.listen(PORT,()=>{
  console.log(`server runnin on http://localhost:${PORT}`)
})