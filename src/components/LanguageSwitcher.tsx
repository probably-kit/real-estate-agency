import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

type LanguageItem = {
  code: string;
  label: string;
  flag: string; // Path to your flag images
};

const languages: LanguageItem[] = [
  { code: 'en', label: 'English', flag: '/flags/en.png' },
  { code: 'pl', label: 'Polski',  flag: '/flags/pl.png' },
  { code: 'ru', label: 'Русский', flag: '/flags/ru.png' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // The currently selected language code. 
  // This is just `i18n.language`; or you can store it in your NavBar and pass it as a prop instead.
  const selectedLanguageCode = i18n.language;

  const currentLanguageItem = languages.find(
    (lng) => lng.code === selectedLanguageCode
  ) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      {/* “Button” that shows current language + flag */}
      <button onClick={toggleDropdown} className="language-switcher-btn">
        <img 
          src={currentLanguageItem.flag} 
          alt={currentLanguageItem.label} 
          className="language-flag"
        />
        <span className="language-label">{currentLanguageItem.label}</span>
        <span className="language-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* The dropdown list of languages */}
      {isOpen && (
        <div className="language-dropdown-menu">
          {languages.map((lng) => (
            <div 
              key={lng.code} 
              className="language-dropdown-item"
              onClick={() => handleLanguageChange(lng.code)}
            >
              <img 
                src={lng.flag} 
                alt={lng.label} 
                className="language-flag"
              />
              <span className="language-dropdown-label">
                {lng.label}
              </span>
              {/* Show a checkmark if this is the active language */}
              {lng.code === selectedLanguageCode && (
                <span className="language-checkmark">✔</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
