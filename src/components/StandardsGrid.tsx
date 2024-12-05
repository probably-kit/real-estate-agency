import React from 'react';
import './StandardsGrid.css';

const StandardsGrid: React.FC = () => {
  return (
    <section className="standards-grid">
      <div className="standards-grid-card">
        <img src="https://via.placeholder.com/60" alt="Market Analysis Icon" />
        <h3>Market Analysis</h3>
        <p>In-depth understanding of market trends to guide pricing and strategy.</p>
      </div>
      <div className="standards-grid-card">
        <img src="https://via.placeholder.com/60" alt="Property Valuation Icon" />
        <h3>Property Valuation</h3>
        <p>Accurate assessments to determine the true value of your favorite apartment, cottage, etc.</p>
      </div>
      <div className="standards-grid-card">
        <img src="https://via.placeholder.com/60" alt="Legal Assistance Icon" />
        <h3>Legal Assistance</h3>
        <p>Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction.</p>
      </div>
      <div className="standards-grid-card">
        <img src="https://via.placeholder.com/60" alt="Post-Sale Support Icon" />
        <h3>Post-Sale Support</h3>
        <p>Providing assistance even after the sale, ensuring clients feel supported throughout their journey.</p>
      </div>
      <div className="standards-grid-card">
        <img src="https://via.placeholder.com/60" alt="Negotiation Skills Icon" />
        <h3>Negotiation Skills</h3>
        <p>In-depth understanding of market trends to guide pricing and strategy.</p>
      </div>
      <div className="standards-grid-card">
        <img src="https://via.placeholder.com/60" alt="Tailored Marketing Plans Icon" />
        <h3>Tailored Marketing Plans</h3>
        <p>Developing customized strategies to showcase properties and attract buyers.</p>
      </div>
    </section>
  );
};

export default StandardsGrid;
