const listPets=(req,res)=>{
  try {
    const listData=listItems()
    res.status(200).json(listData)
    
  } catch (error) {
    res.status(500).send(error)
  }
}

const getPets=(req,res)=>{
  try {
    const listData=getItems(parseInt(req.params.id))
    res.status(200).json(listData)
    
  } catch (error) {
    res.status(500).send(error)
  }
}
const editPets=(req,res)=>{
  try {
    const listData=editPets(parseInt(req.params.id),req.body)
    res.status(200).json(listData)
    
  } catch (error) {
    res.status(500).send(error)
  }
}
const deletePets=(req,res)=>{
  try {
    const listData=deleteItems(parseInt(req.params.id))
    res.status(200).json(listData)
    
  } catch (error) {
    res.status(500).send(error)
  }
}
const addPets=(req,res)=>{
  try {
    const listData=addItems(req.body)
    res.status(200).json(listData)
    
  } catch (error) {
    res.status(500).send(error)
  }
}
module.exports={getPets,listPets,editPets,deletePets,addPets}