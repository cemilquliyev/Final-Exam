import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductThunk=createAsyncThunk('api/getproducts',async()=>{
    const response=await axios.get('http://localhost:5050/products')
    return response.data
})
export const postBasketThunk=createAsyncThunk('api/postproducts',async(data)=>{
    const response=await axios.post('http://localhost:5050/products ,data')
    return response.data
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:[],
    extraReducers:builder=>{
        builder
        .addCase(getProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        .addCase(getProductThunk.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getProductThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(postBasketThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.products.push(action.payload)
            
        })
        .addCase(postBasketThunk.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(postBasketThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default productSlice.reducer



