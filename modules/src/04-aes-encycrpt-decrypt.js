const crypto=require("crypto")

// function to encrypt data
function encrypt(text,key){
  const iv=crypto.randomBytes(16)

  // create cipher with aes-256-cbc
  const cipher=crypto.createCipheriv('aes-256-cbc',key,iv)

  // encrypted the data
  let encrypted=cipher.update(text,'utf8','hex')
  encrypted+=cipher.final('hex')

  // return both encrypteddata and iv
  return {
    iv:iv.toString('hex'),
    encryptedData:encrypted
  }
}

// function for decrypted
function decrypt(encryptedData,iv,key){
  const decipher=crypto.createDecipheriv('aes-256-cbc',key,Buffer.from(iv,'hex'))

  let decrypted=decipher.update(encryptedData,'hex','utf8')
  decrypted+=decipher.final('utf8')
  return decrypted
}

const key = crypto.scryptSync('secretPassword', 'salt', 32);
const message = 'This is a secret message';

// Encrypt
const { iv, encryptedData } = encrypt(message, key);
console.log('Original:', message);
console.log('Encrypted:', encryptedData);
console.log('IV:', iv);

// Decrypt
const decrypted = decrypt(encryptedData, iv, key);
console.log('Decrypted:', decrypted);