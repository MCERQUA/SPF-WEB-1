import React, { useState } from 'react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3>Get in Touch</h3>
              <p>Have questions about our services? We're here to help!</p>
              <div className={styles.contactDetails}>
                <div className={styles.detail}>
                  <strong>Phone:</strong>
                  <a href="tel:1-800-555-0123">1-800-555-0123</a>
                </div>
                <div className={styles.detail}>
                  <strong>Email:</strong>
                  <a href="mailto:contact@company.com">contact@company.com</a>
                </div>
                <div className={styles.detail}>
                  <strong>Address:</strong>
                  <p>123 Business Street<br />City, State 12345</p>
                </div>
                <div className={styles.detail}>
                  <strong>Hours:</strong>
                  <p>Monday - Friday: 9am - 5pm<br />Saturday: By appointment<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <h3>Service Areas</h3>
              <p>We provide services in the following areas:</p>
              <ul className={styles.areas}>
                <li>Greater Metropolitan Area</li>
                <li>Surrounding Counties</li>
                <li>Neighboring Cities</li>
                <li>Rural Communities</li>
              </ul>
            </div>
          </div>
          <div className={styles.formContainer}>
            <h3>Request a Quote</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="service1">Service One</option>
                  <option value="service2">Service Two</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitSuccess && (
                <div className={styles.successMessage}>
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
