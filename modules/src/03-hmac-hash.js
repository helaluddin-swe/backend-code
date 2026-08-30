const crypto=require('crypto')
// const secretKey='mysecretkey'
// const data='welcome hmac'
// const hash=crypto.createHmac('sha256',secretKey)
// hash.update(data)
// const digestHMAC=hash.digest('hex')
// console.log('hmac digest result code',digestHMAC)



// verify signature
// create signature functions
function creatSignature(message,key){
  const hash=crypto.createHmac('sha256',key)
  hash.update(message)
  return hash.digest('hex')
}

// verify signature functions
function verifySignature(message,signature,key){
  const expectedSig=creatSignature(message,key)
  return crypto.timingSafeEqual(Buffer.from(signature,'hex'),Buffer.from(expectedSig,'hex'))

}
const message="hello "
const secretKey2='mysecret'
const signature=creatSignature(message,secretKey2)
const isValid=verifySignature(message,signature,secretKey2)
console.log("result: ",isValid)

const isInValid=verifySignature("Tammana",signature,secretKey2)
console.log("result: ",isInValid)