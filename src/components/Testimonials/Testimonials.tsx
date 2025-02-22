import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What our customers are saying about us</h2>
      <div className={styles.testimonialGrid}>
        <div className={styles.testimonial}>
          <div className={styles.stars}>★★★★★</div>
          <p>"Excellent service! Very professional and knowledgeable team. Would highly recommend to anyone."</p>
          <h4>John Doe</h4>
          <p className={styles.location}>City, State</p>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.stars}>★★★★★</div>
          <p>"Great experience from start to finish. The team was professional and the results exceeded our expectations."</p>
          <h4>Jane Smith</h4>
          <p className={styles.location}>City, State</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
