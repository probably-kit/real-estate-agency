import React from 'react';
import { useTranslation } from 'react-i18next';
import './FAQSection.css';


type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" onClick={toggleAnswer}>
      <div className="faq-question">
        {question}
        <svg className={`arrow ${isOpen ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none" />
          <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="faq-answer" style={{ maxHeight: isOpen ? '500px' : '0' }}>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const { t } = useTranslation();

  const faqData = t('faqSection.faqs', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <div className="faq-section">
      <h1>{t('faqSection.title')}</h1>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSection;
