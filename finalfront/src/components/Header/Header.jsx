import React from 'react'
import styles from './Header.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.hidr}>
                <div className={styles.eatwel}>
                    <h1>EATWELL</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/basket">Basket</a></li>
                        <li><a href="">Offer</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">New</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div className={styles.hambur}>
                <RxHamburgerMenu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header