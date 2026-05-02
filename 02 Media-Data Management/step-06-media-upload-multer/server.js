import expres from "express";

import multer from "multer";
import storage from "./config/multer.js";

const app = expres();
const PORT = 5002;
const upload = multer({ storage: storage, limits: 1024000 });
app.use(upload.single("image"));
app.use(expres.json());
app.get("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("File or Form received");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
