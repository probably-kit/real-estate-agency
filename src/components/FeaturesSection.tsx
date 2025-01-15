import React from 'react';
import { useTranslation } from 'react-i18next';
import SlideButton from './SlideButton';
import './FeaturesSection.css';

type InfoCard = {
  title: string;
  description: string;
};

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  const infoCards: InfoCard[] = t('featuresSection.infoCards', { returnObjects: true }) as InfoCard[];

  return (
    <section className="features-container">
      <div className="left-section">
        <img src="/forest home.webp" alt={t('featuresSection.alt.propertyImage')} />
        <div>
          <h2>{t('featuresSection.title')}</h2>
          <p>
            {t('featuresSection.description')}
          </p>
          <br />
          <SlideButton link="/property" caption={t('featuresSection.buttons.learnMore')} />
        </div>
      </div>
      <div className="right-section">
        {infoCards.map((card, index) => (
          <div className="info-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
