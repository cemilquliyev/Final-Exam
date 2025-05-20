import mongoose from "mongoose";


const productSchema=mongoose.Schema({
    thumbnail:{type:String},
    title:{type:String},
    price:{type:String}
})
const productModel=mongoose.model("products",productSchema)

export default productModel