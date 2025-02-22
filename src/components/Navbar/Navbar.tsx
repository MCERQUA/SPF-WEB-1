import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <p>SINCE 2005</p>
        <div className={styles.certifications}>
          <img src="/images/cert1.png" alt="Certification 1" />
          <img src="/images/cert2.png" alt="Certification 2" />
          <img src="/images/cert3.png" alt="Certification 3" />
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">InsulationPro</Link>
        </div>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <Link 
              to="/services"
              className={location.pathname === '/services' ? styles.active : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about"
              className={location.pathname === '/about' ? styles.active : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/why-choose-us"
              className={location.pathname === '/why-choose-us' ? styles.active : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact"
              className={location.pathname === '/contact' ? styles.active : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.contact}>
          <a href="tel:1-800-555-0123" className={styles.phone}>1-800-555-0123</a>
          <a href="sms:1-800-555-0123" className={styles.text}>Text Us</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
