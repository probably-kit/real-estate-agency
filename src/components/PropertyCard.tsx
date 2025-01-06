import React from 'react';
import { useProperties } from '../Contexts/PropertiesContext'; // Import the context hook
import './PropertyCard.css';

type PropertyCardProps = {
  id: string; // Accept only the property ID
  onClick?: () => void; // Optional click handler
};

const PropertyCard: React.FC<PropertyCardProps> = ({ id, onClick }) => {
  const { properties } = useProperties();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  const { imageUrl, title, price, address, beds, baths, area } = property;

  return (
    <div className="property-card" onClick={onClick} role="button">
      <div className="property-image">
        <img src={imageUrl} alt={title} className="property-thumbnail" />
      </div>
      <div className="property-details">
        <h3>{title}</h3>
        <p className="property-price">{price}</p>
        <p className="property-address">{address}</p>
        <div className="property-info">
          <PropertyInfo icon="home" label={`${beds} Beds`} />
          <PropertyInfo icon="bathroom" label={`${baths} Baths`} />
          <PropertyInfo icon="area" label={`${area} sq.ft`} />
        </div>
      </div>
    </div>
  );
};

const icons = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  bathroom: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  area: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
      <path d="M20 18v-1c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1H2v2h20v-2h-2zm-5-5v-3H9v3H5l7-7 7 7h-4z" />
    </svg>
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
