import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <h2>Why Choose Us</h2>
        <div className={styles.grid}>
          <div className={styles.reason}>
            <div className={styles.icon}>
              <span>✓</span>
            </div>
            <h3>Professional Expertise</h3>
            <p>Our team consists of certified professionals with years of experience in the industry. We ensure the highest quality standards in every project.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.icon}>
              <span>✓</span>
            </div>
            <h3>Quality Materials</h3>
            <p>We use only premium-grade materials that meet or exceed industry standards, ensuring long-lasting results for your property.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.icon}>
              <span>✓</span>
            </div>
            <h3>Customer Satisfaction</h3>
            <p>Our commitment to customer service means we're not satisfied until you are. We provide clear communication and reliable support throughout your project.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.icon}>
              <span>✓</span>
            </div>
            <h3>Competitive Pricing</h3>
            <p>We offer transparent, competitive pricing without compromising on quality. Get the best value for your investment with our services.</p>
          </div>
        </div>
        <div className={styles.cta}>
          <h3>Ready to get started?</h3>
          <p>Contact us today for a free consultation and estimate.</p>
          <div className={styles.buttons}>
            <a href="tel:1-800-555-0123" className={styles.callButton}>Call Now</a>
            <Link to="/contact" className={styles.contactButton}>Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
