const Redis=require("ioredis")
const dotenv = require("dotenv").config();
const redis = new Redis(process.env.REDIS_URL);
module.exports=redis;
