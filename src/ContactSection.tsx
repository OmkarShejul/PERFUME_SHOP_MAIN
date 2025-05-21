import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    
    <div className="Contact">
      <section className="contact-section">
      <div className="contact-section__container">
        {/* Header */}
        <div className="contact-section__header">
          <h2 className="contact-section__title">Contact Us</h2>
          <p className="contact-section__description">
            We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
          </p>
        </div>
        
        {/* Form and Contact Info */}
        <div className="contact-section__form-container">
          <form className="contact-section__form" action="#" method="POST">
            {/* Name Field */}
            <div className="contact-section__field contact-section__field--half">
              <label htmlFor="name" className="contact-section__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-section__input"
                placeholder="Your Name"
                required
                aria-required="true"
              />
            </div>
            
            {/* Email Field */}
            <div className="contact-section__field contact-section__field--half">
              <label htmlFor="email" className="contact-section__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-section__input"
                placeholder="Your Email"
                required
                aria-required="true"
              />
            </div>
            
            {/* Message Field */}
            <div className="contact-section__field contact-section__field--full">
              <label htmlFor="message" className="contact-section__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-section__textarea"
                placeholder="Your Message"
                required
                aria-required="true"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="contact-section__field contact-section__field--full">
              <button type="submit" className="contact-section__button">
                Send Message
              </button>
            </div>
          </form>
          
          {/* Contact Information */}
          <div className="contact-section__info">
            <a href="mailto:example@email.com" className="contact-section__email">
              example@email.com
            </a>
            <p className="contact-section__address">
              49 Smith St.<br />
              Saint Cloud, MN 56301
            </p>
            <div className="contact-section__social">
              {/* Facebook Icon */}
              <a href="https://facebook.com/yourpage" className="contact-section__social-link" aria-label="Facebook">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="contact-section__social-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              
              {/* Twitter Icon */}
              <a href="https://twitter.com/yourprofile" className="contact-section__social-link" aria-label="Twitter">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="contact-section__social-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="https://instagram.com/yourprofile" className="contact-section__social-link" aria-label="Instagram">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="contact-section__social-icon"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="https://linkedin.com/in/yourprofile" className="contact-section__social-link" aria-label="LinkedIn">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="contact-section__social-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactSection;
