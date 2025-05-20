import React from 'react';
import styles from './CardBasket.module.scss'

const CardBasket = ({item,deletebasket}) => {
  return (
    <>
       <div className={styles.container}>
        <div className={styles.card}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title} </p>
            <p>{item.price} </p>
            <div className={styles.btnBox}>
                <button onClick={deletebasket}>sil<a href=""></a></button>
            </div>
        </div>
    </div>
    </>
  );
}

export default CardBasket;

