import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Basket from '../pages/basket/Basket'
import NotFound from '../pages/NotFound/NotFound'

const Router = () => {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/*' element={<NotFound/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}

export default Router
