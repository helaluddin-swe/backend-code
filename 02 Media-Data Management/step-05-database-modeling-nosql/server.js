import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";
const app = express();
const PORT = 5003;
await connectDB();
app.use(express.json());

// crud opearation
// saving person in mongodb
app.get('/person',async(req,res)=>{
 try {
   const personData=await Person.find()
  res.status(201).json(personData)

 } catch (error) {
  res.status(500).json({message:error.message})

 }
 
})
app.post("/person", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, age } = req.body;
    const newPerson = new Person({
      name: name,
      email: email,
      age: age,
    });
    await newPerson.save();
    console.log(newPerson);
    res.send("Person Added");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Failed to add person")
  }
});
// updating the person data 
app.put("/person/:id", async (req, res) => {
  try {
   
    const {id}= req.params
    const updateData=req.body
    const updatePerson=await Person.findByIdAndUpdate(id,updateData,{returnDocument:true,runValidators:true})
  if(!updatePerson){
    res.status(400).send("Person not found")
  } 
   await res.status(201).json() 
    res.send("Person updated");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Failed to updated person")
  }
});
// delete a person
app.delete("/person/:id", async (req, res) => {
  try {
   
    const {id}= req.params
 
    const updatePerson=await Person.findByIdAndDelete(id)
 
   await res.status(201).json() 
    res.send("Person deleted ");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Failed to delete person")
  }
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
