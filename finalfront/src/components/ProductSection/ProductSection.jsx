import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk, postBasketThunk } from '../../redux/reducers/productSlice';
import Card from '../Card/Card';
import styles from './ProductSection.module.scss'

const ProductSection = () => {
    const dispatch=useDispatch()


const products=useSelector((state)=>state.products.products)
const loading=useSelector((state)=>state.products.loading)
const error=useSelector((state)=>state.products.error)

useEffect(()=>{
    dispatch(getProductThunk())
})

const addBasket=(item)=>{
    dispatch(postBasketThunk(item))
}

  return (
    <>
    <div className={styles.container}>
        <div className={styles.data}>
            {products && products.map((item)=> <Card item={item} addBasket={()=> addBasket(item)}/>)}
        </div>
    </div>
    </>
  );
}

export default ProductSection;
