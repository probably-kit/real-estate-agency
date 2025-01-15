import React from 'react';
import { useTranslation } from 'react-i18next';
import SlideButton from './SlideButton';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <div className="image-section">
        <img src="https://via.placeholder.com/400x300" alt={t('contactSection.imageAlt')} />
      </div>
      <div className="content-section">
        <h2 className="title">{t('contactSection.title')}</h2>
        <p className="description">{t('contactSection.description')}</p>
        <SlideButton caption={t('contactSection.buttonCaption')} width="8em" />
      </div>
    </div>
  );
};

export default ContactSection;
