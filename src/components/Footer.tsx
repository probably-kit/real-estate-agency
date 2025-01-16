import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container grid-cols">
        <div>
          <h1 className="footer-title">{t('footer.title')}</h1>
          <p className="footer-description">{t('footer.description')}</p>
        </div>
        <div>
          <h3 className="footer-heading">{t('footer.explore.heading')}</h3>
          <ul className="footer-links">
            {(t('footer.explore.links', { returnObjects: true }) as string[]).map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">{t('footer.services.heading')}</h3>
          <ul className="footer-links">
            {(t('footer.services.links', { returnObjects: true }) as string[]).map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">{t('footer.quickLinks.heading')}</h3>
          <ul className="footer-links">
            {(t('footer.quickLinks.links', { returnObjects: true }) as string[]).map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>{t('footer.bottom.copyright')}</p>
        </div>
        <div className="footer-policies">
          {(t('footer.bottom.policies', { returnObjects: true }) as string[]).map((policy, index) => (
            <a key={index} href="#">{policy}</a>
          ))}
        </div>
      </div>
      <div className="footer-subscription">
        <form className="subscription-form">
          <label htmlFor="email" className="subscription-label">{t('footer.subscription.label')}</label>
          <input
            type="email"
            id="email"
            placeholder={t('footer.subscription.placeholder')}
            className="subscription-input"
          />
          <button className="subscription-button">{t('footer.subscription.button')}</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
