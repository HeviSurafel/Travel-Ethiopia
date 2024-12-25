const mongoose=require('mongoose');

const db=async()=>{
    try{
     const connect= await mongoose.connect(process.env.MONGODB_URL);
        console.log('database connected'+connect.connection.host);
    }catch(err){
        console.log(err.message);
    }
}
module.exports=db