import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../Contexts/PropertiesContext';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';

interface PropertyGridProps {
  displayCount?: number; // make it optional or required based on your need
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ displayCount = 3 }) => {
  const navigate = useNavigate();
  const { properties } = useProperties();

  const handleCardClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="property-container">
      <h1>Explore Our Top Properties</h1>
      <section className="property-grid">
        {properties.slice(0, displayCount).map((property) => (
          <div key={property.id} onClick={() => handleCardClick(property.id)}>
            <PropertyCard id={property.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PropertyGrid;
