const crypto=require("crypto")
const hashPassword=(password)=>{
  // generate a random salt
  const salt=crypto.randomBytes(16).toString('hex')

  // use scrypt for password hashi8ng
  const hash=crypto.scryptSync(password,salt,64).toString('hex')
  // store salt and hash
  return {salt,hash}
}

// function to verify password
const verifyPassword=(password,salt,hash)=>{
  const hashedPassword=crypto.scryptSync(password,salt,64).toString('hex')
  return hashPassword===hash
}
const password='helal'

const {salt,hash}=hashPassword(password)
console.log("salt: ",salt)
console.log("hash: ",hash)
// verify valid password login 
const isValid=verifyPassword(password,salt,hash)
console.log("valid password",isValid)
const isInValid=verifyPassword('password',salt,hash)
console.log("valid password",isInValid)
