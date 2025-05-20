import mongoose from "mongoose"


export const connectDB=async(req,res)=>{
    const connect=await mongoose.connect(process.env.MONGO_URl)
    console.log(connect.connection.host);
}