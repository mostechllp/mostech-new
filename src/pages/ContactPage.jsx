import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import './ContactPage.css';

import GlobalPresenceMap from '../components/GlobalPresenceMap';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure to replace these with your actual EmailJS credentials
    emailjs.sendForm('service_6vdumow', 'template_r37cvxg', form.current, '-G08WgHo8YaudEBwv')
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
      });
  };

  return (
    <main className="contact-page-wrapper">
      <section className="contact-banner-section">
        <div className="container contact-banner-container">
          <div className="contact-banner-left">
            <div className="cb-badge">
              <span className="cb-badge-line"></span>
              CONTACT US
            </div>

            <h1 className="cb-title">
              Let's Build Your Next<br />
              <span className="cb-highlight">Big Idea</span>
            </h1>

            <p className="cb-subtitle">
              Have a project in mind? Get in touch with our team and let's turn your vision into powerful digital solutions. We'll get back to you within 24 business hours.
            </p>


          </div>

        </div>
      </section>

      {/* Unified Section: Map (left) + Form (right) + 2 Cards (bottom) */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Top Row: Left Side Map, Right Side Contact Form */}
          <div className="contact-top-row">
            <div className="contact-map-col">
              <GlobalPresenceMap />
            </div>

            <div className="contact-form-col">
              <div className="contact-form-card">
                <h2>Send Us a <span className="contact-form-blue">Message</span></h2>
                <p className="contact-form-subtitle">
                  Fill out the form below and our team will get back to you within 24 business hours.
                </p>

                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                  {status === 'success' && <div style={{ color: '#16a34a', marginBottom: '1.5rem', fontWeight: '600', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>✅ Your message has been sent successfully!</div>}
                  {status === 'error' && <div style={{ color: '#dc2626', marginBottom: '1.5rem', fontWeight: '600', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>❌ Failed to send message. Please verify your EmailJS credentials.</div>}

                  <div className="form-group">
                    <label>Your Name *</label>
                    <div className="input-wrapper">
                      <input type="text" name="user_name" placeholder="Enter your name" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Your Email Address *</label>
                    <div className="input-wrapper">
                      <input type="email" name="user_email" placeholder="Enter your email address" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <div className="input-wrapper textarea-wrapper">
                      <textarea name="message" placeholder="Enter your message..." rows="4" required></textarea>
                    </div>
                  </div>

                  <button type="submit" className="contact-submit-btn" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                    {status === 'sending' ? 'Sending...' : <><Send size={18} /> Send Message <span style={{ marginLeft: '8px' }}>→</span></>}
                  </button>

                  <div className="contact-form-footer">
                    <span className="lock-icon">🔒</span> Your information is safe with us. We respect your privacy.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
