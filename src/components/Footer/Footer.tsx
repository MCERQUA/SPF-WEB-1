import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Location</h3>
          <p>123 Business Street</p>
          <p>City, State 12345</p>
          <p>contact@company.com</p>
          <p>123-456-7890</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Hours</h3>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: By appointment</p>
          <p>Sunday: Closed</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/company" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/company" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com/company/company" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
