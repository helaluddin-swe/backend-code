import { checkLimit } from "../utils/checkLimit.js"

export const ipRateLimiter=async(req,res,next)=>{
  const key=`ip_${user.ip}`
  const limit=15
  const windowMs=60*60*1000
  const status= await checkLimit(key,limit,windowMs)
  if(!status.allowed){
    return res.status(429).json({error:"Your are out of limit .Try 1 minitues later"})
  }
}
export const userRateLimiter=async(req,res,next)=>{
  const key=`user_${user.userId}`
  const limit=30
  const windowMs=60*60*1000
  const status= await checkLimit(key,limit,windowMs)
  if(!status.allowed){
    return res.status(429).json({error:"Your accont request limit acceeded .Try again later"})
  }
}