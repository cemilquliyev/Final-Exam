import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBasketThunk=createAsyncThunk('api/getbasket',async()=>{
    const response=await axios.get('http://localhost:5050/basket')
    return response.data
})
export const deleteBasketThunk=createAsyncThunk('api/deletebasket',async(id)=>{
    const response=await axios.post(`http://localhost:5050/products/${id}`)
    return response.data
})

const basketSlice=createSlice({
    name:'basket',
    initialState:{
        basket:[]
    },
    reducers:[],
    extraReducers:builder=>{
        builder
        .addCase(getBasketThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.basket=action.payload
        })
        .addCase(getBasketThunk.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getBasketThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(deleteBasketThunk.fulfilled,(state,action)=>{
            state.loading=false
           state.basket=state.basket.filter(item=> item=item._id !== action.payload)
            
        })
        .addCase(deleteBasketThunk.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(deleteBasketThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default basketSlice.reducer





