
import express from "express"
import { deleteBasket, getBasket, postBasket } from "../controller/basketController.js"


const router=express.Router()

router.route('/')

.get(getBasket)
.post(postBasket)


router.route('/:id')

.delete(deleteBasket)

export default router