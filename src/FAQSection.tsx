import React, { useState } from 'react';
import './FAQSection.css';

type FaqItemProps = {
    question: string;
    answer: string;
  };
  
  const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="faq-item" onClick={toggleAnswer}>
        <div className="faq-question">
          {question}
          <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9662;</span>
        </div>
        <div className="faq-answer" style={{ maxHeight: isOpen ? '500px' : '0' }}>
          {isOpen && <p>{answer}</p>}
        </div>
      </div>
    );
  };
  


  const FaqSection: React.FC = () => {
    const faqData = [
      {
        question: 'What services do you offer for real estate clients?',
        answer:
          'We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process.',
      },
      {
        question: 'How can I get started with your services?',
        answer:
          "Contact us via email or phone to schedule a consultation. We'll discuss your needs and provide the next steps.",
      },
      {
        question: 'How do you assist with legal documentation?',
        answer:
          'Our team will help you prepare and review all necessary legal documents, ensuring compliance with local regulations.',
      },
      {
        question: 'Can you help me find the right property?',
        answer:
          'Absolutely! We have access to a wide network of properties and will help you find the one that best suits your needs and budget.',
      },
    ];
  
    return (
      <div className="faq-section">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };
  
  export default FaqSection;
  