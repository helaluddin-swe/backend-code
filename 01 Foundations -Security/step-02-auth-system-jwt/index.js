const express = require("express");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 5006;

const users = [];
app.use(express.json());
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    username,
    password: hashedPassword,
  });
  res.send("User registered");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.send("not authorized");
  }
  const token = await jwt.sign({ username: username }, "test#token");
  res.json({ token });
});
app.get("/dashboard", async (req, res) => {
  try {
    const token = req.header("Authorization");
    const docodedToken = jwt.verify(token, "test#token");
    if (docodedToken.username) {
      res.send(`Welcome to your dashboard  ${docodedToken.username}`);
    } else {
      res.status(401).send("Acces denied");
    }
  } catch (error) {
    res.send("access not allowed");
  }
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
