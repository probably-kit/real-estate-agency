import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProperties } from '../Contexts/PropertiesContext';
import './PropertyCard.css';

type PropertyCardProps = {
  id: string;
  onClick?: () => void;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ id, onClick }) => {
  const { t } = useTranslation();
  const { properties } = useProperties();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="property-card error-card">
        <p>{t('propertyCard.notFound')}</p>
      </div>
    );
  }

  const { imageUrl, title, price, address, beds, baths, area } = property;

  return (
    <div className="property-card" onClick={onClick} role="button">
      <div className="property-image">
        <img src={imageUrl} alt={title} className="property-thumbnail" />
      </div>
      <div className="property-details">
        <h3>{title}</h3>
        <p className="property-price">{t('propertyCard.labels.price')} {price}</p>
        <p className="property-address">{t('propertyCard.labels.address')} {address}</p>
        <div className="property-info">
          <PropertyInfo icon="home" label={t('propertyCard.info.beds', { count: beds })} />
          <PropertyInfo icon="bathroom" label={t('propertyCard.info.baths', { count: baths })} />
          <PropertyInfo icon="area" label={t('propertyCard.info.area', { count: area })} />
        </div>
      </div>
    </div>
  );
};


const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 20V18.5M5 20V18.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 15C2 14.0681 2 13.6022 2.15224 13.2346C2.35523 12.7446 2.74458 12.3552 3.23463 12.1522C3.60218 12 4.06812 12 5 12H19C19.9319 12 20.3978 12 20.7654 12.1522C21.2554 12.3552 21.6448 12.7446 21.8478 13.2346C22 13.6022 22 14.0681 22 15C22 15.9319 22 16.3978 21.8478 16.7654C21.6448 17.2554 21.2554 17.6448 20.7654 17.8478C20.3978 18 19.9319 18 19 18H5C4.06812 18 3.60218 18 3.23463 17.8478C2.74458 17.6448 2.35523 17.2554 2.15224 16.7654C2 16.3978 2 15.9319 2 15Z" stroke="#000000" stroke-width="1.5"></path> <path d="M21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12" stroke="#000000" stroke-width="1.5"></path> <path d="M18.5 12V10.5C18.5 8.61438 18.5 7.67157 17.9142 7.08579C17.3284 6.5 16.3856 6.5 14.5 6.5H9.5C7.61438 6.5 6.67157 6.5 6.08579 7.08579C5.5 7.67157 5.5 8.61438 5.5 10.5V12" stroke="#000000" stroke-width="1.5"></path> <path d="M12 7V12" stroke="#000000" stroke-width="1.5"></path> </g></svg>
  ),
  bathroom: (
    <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier">
        <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m16 0v0a1 1 0 0 0 1-1V7c0-1-.6-3-3-3s-3 2-3 3m5 5v2c0 1.138-.583 3.248-2.745 3.841M20 12H4m0 0v2c0 1.138.583 3.248 2.745 3.841M6 20l.745-2.159m0 0c.37.102.787.159 1.255.159h8a4.71 4.71 0 0 0 1.255-.159M18 20l-.745-2.159M15 7h-2m2 0h2"></path></g>
    </svg>
  ),
  area: (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>scale_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Design" transform="translate(-192.000000, -96.000000)" fill-rule="nonzero"> <g id="scale_line" transform="translate(192.000000, 96.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M11,3 C11.5523,3 12,3.44772 12,4 C12,4.51283143 11.613973,4.93550653 11.1166239,4.9932722 L11,5 L5,5 L5,19 L19,19 L19,13 C19,12.4477 19.4477,12 20,12 C20.51285,12 20.9355092,12.386027 20.9932725,12.8833761 L21,13 L21,19 C21,20.0543909 20.18415,20.9181678 19.1492661,20.9945144 L19,21 L5,21 C3.94563773,21 3.08183483,20.18415 3.00548573,19.1492661 L3,19 L3,5 C3,3.94563773 3.81587733,3.08183483 4.85073759,3.00548573 L5,3 L11,3 Z M19.75,3 C20.4404,3 21,3.55964 21,4.25 L21,8 C21,8.55228 20.5523,9 20,9 C19.4477,9 19,8.55228 19,8 L19,6.41421 L12.4142,13 L14,13 C14.5523,13 15,13.4477 15,14 C15,14.5523 14.5523,15 14,15 L10.25,15 C9.55964,15 9,14.4404 9,13.75 L9,10 C9,9.44772 9.44772,9 10,9 C10.5523,9 11,9.44772 11,10 L11,11.5858 L17.5858,5 L16,5 C15.4477,5 15,4.55228 15,4 C15,3.44772 15.4477,3 16,3 L19.75,3 Z" id="形状" fill="#000000"> </path> </g> </g> </g> </g></svg>
  ),
} as const;

type IconKey = keyof typeof icons; // Define the valid keys of the `icons` object

const PropertyInfo: React.FC<{ icon: IconKey; label: string }> = ({ icon, label }) => {
  return (
    <div className="property-info-item">
      {icons[icon]}
      <span>{label}</span>
    </div>
  );
};

export default PropertyCard;
