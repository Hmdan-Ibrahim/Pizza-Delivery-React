// import React from 'react'

import { Link } from "react-router-dom";
import styles from './Home.module.css'

export default function Home() {

  return (
    <section className="container">
      <div className={`${styles.hero}`}>
        <div className={styles.heroText}>
          <h1>🍕 Fast Pizza 🚀</h1>
          <p>
            The fastest pizza in the galaxy. Hot, fresh, and delivered to your
            door in under 30 minutes.
          </p>
          <div className={styles.actions}>
            <Link
              to="/menu"
              className={`${styles.button} ${styles.primaryBtn}`}
            >
              🍕 Order Now
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/public/fast-pizza.webp" alt="Pizza box" />
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>🚚 Fast Delivery</h2>
          <p>Delivered in under 30 minutes, guaranteed.</p>
        </div>
        <div className={styles.feature}>
          <h2>🔥 Fresh Ingredients</h2>
          <p>Locally sourced and baked to perfection.</p>
        </div>
        <div className={styles.feature}>
          <h2>💳 Easy Checkout</h2>
          <p>Secure and fast payment process.</p>
        </div>
      </div>
    </section>
  );
}

