import React from 'react';
import styles from './WelcomeSection.module.scss'

const WelcomeSection = () => {
  return (
    <div>
        <div className={styles.velcome}>
            <div className={styles.cardBox}>
                <div className={styles.cardtex}>
                    <h3>OUR STORY</h3>
                    <h1>Welcome</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <button>Learn More About Us</button>
                </div>
                <div className={styles.cardimg}>
                    <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default WelcomeSection;
