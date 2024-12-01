import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container grid-cols">
        <div>
          <h1 className="footer-title">WernerHome</h1>
          <p className="footer-description">Where Your Dream Space Becomes Reality. Building Futures, One Property at a Time.</p>
        </div>
        <div>
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li><a href="#">Buy</a></li>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Short Term</a></li>
            <li><a href="#">New Projects</a></li>
            <li><a href="#">List Your Property</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#">Property Management</a></li>
            <li><a href="#">Property Valuation</a></li>
            <li><a href="#">Property Exchange</a></li>
            <li><a href="#">Legal Agreements</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>&copy; 2024 WernerHome. All rights reserved</p>
        </div>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Country Sitemap</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
      <div className="footer-subscription">
        <form className="subscription-form">
          <label htmlFor="email" className="subscription-label">Are you finding a home?</label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="subscription-input"
          />
          <button className="subscription-button">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
