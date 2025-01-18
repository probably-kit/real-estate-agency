import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src="/Background main image.jpg" alt={t('heroSection.feedback.alt.building')} />
        <div className="overlay-content">
          <h1 dangerouslySetInnerHTML={{ __html:t('heroSection.title')} }></h1>
          <p dangerouslySetInnerHTML={{ __html: t('heroSection.description') }}></p>
          <div className="hero-buttons">
            <Link className="transparent-btn" to="/property">{t('heroSection.buttons.exploreProjects')}</Link>
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
              <img src="https://via.placeholder.com/40" alt={t('heroSection.feedback.alt.client1')} />
            </div>
            <div className="avatar">
              <img src="https://via.placeholder.com/40" alt={t('heroSection.feedback.alt.client2')} />
            </div>
            <div className="avatar">
              <img src="https://via.placeholder.com/40" alt={t('heroSection.feedback.alt.client3')} />
            </div>
          </div>
          <div className="details">{t('heroSection.feedback.details')}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
