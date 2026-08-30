const express=require("express")
const usersData=require("./MOCK_DATA.json")
const app=express()
const PORT=8000
// /user for html
app.get("/users",(req,res)=>{
  const html=`<table>
  ${usersData.map((user)=>`<tr style={{borderColor:"red"}}> <td>${user.first_name}</td></tr>`).join("")}
  </table> `
  res.send(html)
})
// routes-rest api
app.use("/api/users",(req,res)=>{
  return res.json(usersData)
})
// get dynamic id 
app.get("/api/users/:id",(req,res)=>{
  const userId=Number(req.params.id);
  const user=usersData.find((user)=>user.id===userId);
  return res.json(user);
})

app.listen(PORT,()=>{
  console.log(`server started on :http://localhost:${PORT}`)
})