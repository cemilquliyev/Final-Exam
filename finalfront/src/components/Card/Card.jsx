import React from 'react';
import styles from './Card.module.scss'

const Card = ({item,addBasket}) => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.card}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title} </p>
            <p>{item.price} </p>
            <div className={styles.btnBox}>
                <button onClick={addBasket}>elave et<a href=""></a></button>

            </div>
        </div>
    </div>
      
    </>
  );
}

export default Card;
