import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useProperties } from '../Contexts/PropertiesContext'; 
import PropertyCard from './PropertyCard'; 
import './PropertyCard.css'; 

const PropertyGrid: React.FC = () => {
  const navigate = useNavigate();
  const { properties } = useProperties(); 

  const handleCardClick = (id: string) => {
    navigate(`/property/${id}`); 
  };

  return (
    <div className="property-container">
      <h1>Explore Our Top Properties</h1>
      <section className="property-grid">
        {properties.slice(0, 3).map((property) => ( 
          <div key={property.id} onClick={() => handleCardClick(property.id)}>
            <PropertyCard id={property.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PropertyGrid;
