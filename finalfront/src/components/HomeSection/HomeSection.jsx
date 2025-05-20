import React from 'react'
import styles from './HomeSection.module.scss'

const HomeSection = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Welcome To EatWell</h1>
                <p>Come and eat well with our delicious & healthy foods.</p>
                <button>Reservation</button>
            </div>
        </div>
    </div>
  )
}

export default HomeSection