import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>SINCE 2005</h1>
          <h2>Serving Customers & Clients</h2>
          <h2>Your Service Area</h2>
        </div>
        <div className={styles.certifications}>
          <div className={styles.certBadge}>CERTIFIED</div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h3>Have a question?<br />Our experts have the answers.</h3>
          <div className={styles.ctaButtons}>
            <a href="tel:123-456-7890" className={styles.btn}>GIVE US A CALL</a>
            <a href="sms:123-456-7890" className={styles.btn}>SHOOT US A TEXT</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
