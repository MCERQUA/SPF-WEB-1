import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>About Us</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>Since 2005, we have been dedicated to providing top-quality services to our customers and clients. Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.</p>
            <p>Our team of experienced professionals brings expertise and dedication to every project, ensuring the highest standards of quality and service.</p>
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Experience</h3>
              <p>Over 15 years of industry expertise</p>
            </div>
            <div className={styles.feature}>
              <h3>Quality</h3>
              <p>Certified professionals and premium materials</p>
            </div>
            <div className={styles.feature}>
              <h3>Service</h3>
              <p>Dedicated customer support and satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
