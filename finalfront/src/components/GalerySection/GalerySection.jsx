import React from 'react';
import styles from './GalerySection.module.scss'

const GalerySection = () => {
  return (
    <div>
        <div className={styles.galery}>
            <div className={styles.galerytex}>
                <h1>Gallery</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className={styles.galeryBox}>
                <div className={styles.imgcardm}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                </div>
                <div className={styles.imgcardm}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                </div>
                <div className={styles.imgcardm}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                </div>
                <div className={styles.imgcardm}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg" alt="" />
                </div>
                <div className={styles.imgcardm}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                </div>
                <div className={styles.imgcardm}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                </div>

            </div>
        </div>

      
    </div>
  );
}

export default GalerySection;
