const express = require("express");
const app = express();

// Configuration
const PORT = 5001;

// Global Middleware
app.use(express.json());

// --- Basic Routes ---
app.get("/", (req, res) => {
  res.send("API is running...");
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
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});