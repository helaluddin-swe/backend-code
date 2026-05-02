
const express=require("express")

const app=express()
const PORT=5005




app.use(express.json())
app.get('/',(req,res)=>{
  res.send(" app is running")
})
// get all products:/api/products
app.get('/api/products',(req,res)=>{
  const products=[
    {id:1,name:"Mobile iphone-17 pro max",price:10000},
    {id:2,name:"Laptop",price:20000},
    {id:3,name:"Mobile iphone-13 pro max",price:10000}
  ]
  res.status(200).json({products})
})
// sinle products by id: /api/products/:id
app.get('/api/products/:id',async(req,res)=>{
  const products=[
    {id:1,name:"Mobile iphone-17 pro max",price:10000},
    {id:2,name:"Laptop",price:20000},
    {id:3,name:"Mobile iphone-13 pro max",price:10000}
  ]
  const product=await products.find(p=>p.id===Number(req.params.id))
  if(!product){
    return res.status(404).json({message:"Product not found"})
  }

  res.status(200).json({product})
})



app.listen(PORT,()=>{
  console.log(`server runnin on http://localhost:${PORT}`)
})