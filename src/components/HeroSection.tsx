import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src="/Background main image.jpg" alt="Building" />
        <div className="overlay-content">
          <h1>Designing Your Next Chapter.</h1>
          <p>
            Where Dreams Become Apartments. <br /> Transforming Visions into Vibrant Living Spaces.
          </p>
          <div className="hero-buttons">
            <Link className="transparent-btn" to="/property">Explore Projects</Link>
            {/* <a href="#" className="btn">
              Our Process
            </a> */}
          </div>
        </div>
        <svg className="svg-inverted-border" width="28" height="26">
          <path d="M25,0 L25,25 L0,25 A25,25 0 0,0 25,0 Z" fill="white" />
        </svg>
        <svg className="svg-inverted-border2" width="25" height="25">
          <path d="M25,0 L25,25 L0,25 A25,25 0 0,0 25,0 Z" fill="white" />
        </svg>
        <div className="hero-feedback">
          <div className="avatars">
            <div className="avatar">
              <img src="https://via.placeholder.com/40" alt="Client 1" />
            </div>
            <div className="avatar">
              <img src="https://via.placeholder.com/40" alt="Client 2" />
            </div>
            <div className="avatar">
              <img src="https://via.placeholder.com/40" alt="Client 3" />
            </div>
            
          </div>
          <div className="details">50k+ Happy Clients</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
