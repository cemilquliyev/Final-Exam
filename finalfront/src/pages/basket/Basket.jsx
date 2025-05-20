import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk, postBasketThunk } from '../../redux/reducers/productSlice';
import CardBasket from '../../components/CardBasket/CardBasket';
import styles from './Basket.module.scss'


const Basket = () => {
    const dispatch=useDispatch()


    const basket=useSelector((state)=>state.basket.basket)
    const loading=useSelector((state)=>state.basket.loading)
    const error=useSelector((state)=>state.basket.error)
    
    useEffect(()=>{
        dispatch(getProductThunk())
    })
    
    const deletebasket=(id)=>{
        dispatch(postBasketThunk(id))
    }
    
  return (
    <>
       <div className={styles.container}>
        <div className={styles.data}>
          {basket && basket.map(item=> <CardBasket item={item} deletebasket={()=> deletebasket(item.id)}/>)}
        </div>
    </div>
    </>
  );
}

export default Basket;















