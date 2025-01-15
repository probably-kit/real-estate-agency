import React from 'react';
import { useTranslation } from 'react-i18next';
import './StandardsGrid.css';

const StandardsGrid: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='standards-container'>
      <h1 className='standards-h1'>{t('standards.title')}</h1>
      <section className="standards-grid">
        <div className="standards-grid-card">
          <img src="/stats-chart-svgrepo-com.svg" alt={t('standards.cards.marketAnalysis.title')} />
          <h3>{t('standards.cards.marketAnalysis.title')}</h3>
          <p>{t('standards.cards.marketAnalysis.description')}</p>
        </div>
        <div className="standards-grid-card">
          <img src="/house-lock-svgrepo-com.svg" alt={t('standards.cards.propertyValuation.title')} />
          <h3>{t('standards.cards.propertyValuation.title')}</h3>
          <p>{t('standards.cards.propertyValuation.description')}</p>
        </div>
        <div className="standards-grid-card">
          <img src="/file-check-svgrepo-com.svg" alt={t('standards.cards.legalAssistance.title')} />
          <h3>{t('standards.cards.legalAssistance.title')}</h3>
          <p>{t('standards.cards.legalAssistance.description')}</p>
        </div>
        <div className="standards-grid-card">
          <img src="/support-svgrepo-com.svg" alt={t('standards.cards.postSaleSupport.title')} />
          <h3>{t('standards.cards.postSaleSupport.title')}</h3>
          <p>{t('standards.cards.postSaleSupport.description')}</p>
        </div>
        <div className="standards-grid-card">
          <img src="/message-text-1-svgrepo-com.svg" alt={t('standards.cards.negotiationSkills.title')} />
          <h3>{t('standards.cards.negotiationSkills.title')}</h3>
          <p>{t('standards.cards.negotiationSkills.description')}</p>
        </div>
        <div className="standards-grid-card">
          <img src="/target-bold-svgrepo-com.svg" alt={t('standards.cards.marketingPlans.title')} />
          <h3>{t('standards.cards.marketingPlans.title')}</h3>
          <p>{t('standards.cards.marketingPlans.description')}</p>
        </div>
      </section>
    </div>
  );
};

export default StandardsGrid;
