const crypto=require("crypto")
const { uptime } = require("process")
const hash=crypto.createHash("sha256")
hash.update("hello,helal uddin")
const digest=hash.digest('hex')
console.log("The result of code sha-256: ",digest)

// common hash algorithm
// MD5 (not recommended for security-critical applications)
const data='hello,md5 model'
const md5=crypto.createHash('md5')
md5.update(data)
const digestMd5=md5.digest('hex')
console.log("The result of code md5: ",digestMd5)

// SHA-1 (not recommended for security-critical applications)
const sha1=crypto.createHash('sha1')
sha1.update(data)
const digestSha1=sha1.digest('hex')
console.log("The result of sha1: ",digestSha1)

// sha-512
const sha512=crypto.createHash('sha512')
sha512.update(data)
const digestSha512=sha512.digest('hex')
console.log("The result of sha512: ",digestSha512)