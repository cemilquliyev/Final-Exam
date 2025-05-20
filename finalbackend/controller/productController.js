import productModel from "../models/productModel.js"



const getProduct=async(req,res)=>{
    const products=await productModel.find()
    res.json(products)
}

const postProduct=async(req,res)=>{
    const newproduct=req.body
    await productModel.create(newproduct)
    res.json(newproduct)
}

const deleteProduct=async(req,res)=>{
    const {id}=req.params
    await productModel.findByIdAndDelete(id)
    res.json('silindi')
}

export {getProduct,postProduct,deleteProduct}