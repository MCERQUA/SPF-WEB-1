import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>
      <div className={styles.serviceCards}>
        <div className={styles.serviceCard}>
          <h3>Service One</h3>
          <p>Description of your first main service offering goes here. Highlight key benefits and features.</p>
          <a href="/services#service-one" className={styles.learnMore}>LEARN MORE</a>
        </div>
        <div className={styles.serviceCard}>
          <h3>Service Two</h3>
          <p>Description of your second main service offering goes here. Highlight key benefits and features.</p>
          <a href="/services#service-two" className={styles.learnMore}>LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
