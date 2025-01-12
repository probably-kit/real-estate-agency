import React from 'react';
import SlideButton from './SlideButton';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-container">
      <div className="left-section">
        <img src="/forest home.webp" alt="Property Image" />
        <div>
          <h2>Find Your Dream Property At The Best Price</h2>
          <p>
            We support our clients at every stage of the buying and selling process, ensuring a seamless and stress-free experience from start to finish.
          </p>
          <br />
          <SlideButton link='/property' caption='Learn More'/>
        </div>
      </div>
      <div className="right-section">
        <div className="info-card">
          <h3>100k+</h3>
          <p>Property Constructed</p>
        </div>
        <div className="info-card">
          <h3>100+</h3>
          <p>Award Winning</p>
        </div>
        <div className="info-card">
          <h3>50k+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="info-card">
          <h3>5+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
