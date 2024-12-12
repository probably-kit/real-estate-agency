import React from 'react';
import SlideButton from './SlideButton';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="image-section">
        <img src="https://via.placeholder.com/400x300" alt="House" />
      </div>
      <div className="content-section">
        <h2 className="title">What Makes Us Your Ideal Real Estate Partner?</h2>
        <p className="description">
          Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction.
        </p>
        <SlideButton caption='Contact Us' width='8em'/>
      </div>
    </div>
  );
};

export default ContactSection;
