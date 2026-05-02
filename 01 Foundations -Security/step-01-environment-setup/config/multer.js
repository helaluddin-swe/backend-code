
const multer = require("multer")


exports.storage=multer.diskStorage({
  destination:'uploads',
  filename:(req,file,cb)=>{
   cb(null,file.fieldname+'_'+Date.now()+'_'+file.originalname)
  }
})