import React from 'react';
import './StandardsGrid.css';

const StandardsGrid: React.FC = () => {
  return (
    <div className='standards-container'>
      <h1 className='standards-h1'>Highlights of Our Work Standards</h1>
      <section className="standards-grid">
        <div className="standards-grid-card">
          <img src="src/assets/stats-chart-svgrepo-com.svg" alt="Market Analysis Icon" />
          <h3>Market Analysis</h3>
          <p>In-depth understanding of market trends to guide pricing and strategy.</p>
        </div>
        <div className="standards-grid-card">
          <img src="src/assets/house-lock-svgrepo-com.svg" alt="Property Valuation Icon" />
          <h3>Property Valuation</h3>
          <p>Accurate assessments to determine the true value of your favorite apartment, cottage, etc.</p>
        </div>
        <div className="standards-grid-card">
          <img src="src/assets/file-check-svgrepo-com.svg" alt="Legal Assistance Icon" />
          <h3>Legal Assistance</h3>
          <p>Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction.</p>
        </div>
        <div className="standards-grid-card">
          <img src="src/assets/support-svgrepo-com.svg" alt="Post-Sale Support Icon" />
          <h3>Post-Sale Support</h3>
          <p>Providing assistance even after the sale, ensuring clients feel supported throughout their journey.</p>
        </div>
        <div className="standards-grid-card">
          <img src="src/assets/message-text-1-svgrepo-com.svg" alt="Negotiation Skills Icon" />
          <h3>Negotiation Skills</h3>
          <p>In-depth understanding of market trends to guide pricing and strategy.</p>
        </div>
        <div className="standards-grid-card">
          <img src="src/assets/target-bold-svgrepo-com.svg" alt="Tailored Marketing Plans Icon" />
          <h3>Tailored Marketing Plans</h3>
          <p>Developing customized strategies to showcase properties and attract buyers.</p>
        </div>
      </section>
    </div>

  );
};

export default StandardsGrid;
