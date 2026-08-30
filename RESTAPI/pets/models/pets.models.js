const getItems=id=>{
  try {
    const pet=db?.pets?.filter(pet=>pet?.id===id)[0]
    return pet
  } catch (error) {
    console.log("error",error)
  }
}