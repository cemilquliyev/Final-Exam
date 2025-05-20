import React from 'react';
import styles from './OurSection.module.scss'

const OurSection = () => {
  return (
    <div>
        <div className={styles.oursc}>
            <div className={styles.texs}>
                <h3>OUR OFFERS</h3>
                <h1>Our Offer This Summer</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className={styles.cardBoxes}>
                <div className={styles.cardsz}>
                    <div className={styles.imgsz}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" alt="" />
                 </div>
                 <div className={styles.cardtexs}>
                    <h3>$19.50</h3>
                    <h2>Beef with Sauce </h2>
                    <p>Far far away, behind the word mountains far from the countries Vokalia and Consonatia there live the blind texts</p>
                    <button>ORDER NOW</button>
                 </div>
                </div>
                 <div className={styles.cardszA}>
                    <div className={styles.imgsz}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg" alt="" />
                 </div>
                 <div className={styles.cardtexs}>
                    <h3>$19.50</h3>
                    <h2>Beef with Sauce </h2>
                    <p>Far far away, behind the word mountains far from the countries Vokalia and Consonatia there live the blind texts</p>
                    <button>ORDER NOW</button>
                 </div>
                </div>
                <div className={styles.cardszB}>
                    <div className={styles.imgsz}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg" alt="" />
                 </div>
                 <div className={styles.cardtexs}>
                    <h3>$19.50</h3>
                    <h2>Beef with Sauce </h2>
                    <p>Far far away, behind the word mountains far from the countries Vokalia and Consonatia there live the blind texts</p>
                    <button>ORDER NOW</button>
                 </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurSection;
