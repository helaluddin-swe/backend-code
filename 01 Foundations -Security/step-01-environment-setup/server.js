const express = require("express");
const { storage } = require("./config/multer");
const multer=require('multer');
const app = express();


// Configuration
const PORT = 5001;

const upload=multer({storage:storage,limits:1024000})
app.use(upload.single('image'))
// Global Middleware
app.use(express.json());
app.get('/',(req,res)=>{
  res.send("API is running")
})
// form data handling

// to fix =undefined in console for req.body add urlencoded
app.use(express.urlencoded({extended:true}))
app.get('/form',(req,res)=>{
  console.log(req.body)
  console.log(req.file)
  res.send("Form Received")
})

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
/*
app.use(((req,res,next)=>{
  console.log("A message is request come at "+Date.now())
  next()
}))
// handle image or public file static file
app.use('/images',express.static('images'))
app.use('/resume',express.static('public'))
// set ejs
app.set('view engine', 'ejs')
// --- Basic Routes ---
app.get("/", (req, res) => {
  const username="Helal Uddin"
  res.render('index',{username})
});

app.get("/about", (req, res) => {
  res.send("This is the about route endpoint");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact route endpoint");
});

// --- User Management (CRUD) ---

// Create User
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: `User ${name} with email ${email} created successfully`,
  });
});

// Get Single User
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Fetching details for user ID: ${id}`,
  });
});

// Update User
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({
    message: `User ${id} updated to ${name} and ${email}`,
  });
});

// Delete User
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User ${id} deleted successfully`,
  });
});

// --- Specialized Routes ---

// Regex validation (Exactly 5 digits) for Express 5.x
app.get('/things/:name/:id', (req, res) => {
  const { name, id } = req.params;
  res.json({ name, id });
});

// --- Error Handling ---

// 404 Catch-all handler
// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });
app.use('/error',(req,res)=>{
  throw new Error("This is test error")
})
app.use((err,req,res,next)=>{
  console.error(err.message)
  res.send("Internal Server ERROR")
})
*/