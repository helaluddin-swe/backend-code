const express=require("express")
const { listPets, getPets, editPets, addPets, deletePets } = require("../controllers/pets.controllers.js")
const router=express.Router()
router.get("/",listPets)
router.get("/:id",getPets)
router.put("/:id",editPets)
router.post("/",addPets)
router.delete("/:id",deletePets)
module.exports=router