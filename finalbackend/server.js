import { configDotenv } from "dotenv";
import cors from "cors"
import express from "express"
import { connectDB } from "./config/config.js";
import ProductRouter from "./router/productRouter.js"
import BasketRouter from "./router/basketRouter.js"



configDotenv()

const app=express()

app.use(cors('*'))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

connectDB()

app.use("products",ProductRouter)
app.use("basket",BasketRouter)

const PORT=5050

app.listen(PORT,()=>{
    console.log(`backend ${PORT} isleyir`);
})




