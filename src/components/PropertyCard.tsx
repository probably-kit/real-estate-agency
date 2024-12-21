import React from 'react';
import './PropertyCard.css';
import { useNavigate } from 'react-router-dom';
import { propertyData } from '../data/propertyData ';

type PropertyCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  area: number;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  price,
  address,
  beds,
  baths,
  area,
}) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img
          src={imageUrl}
          alt="Property"
          className="property-thumbnail"
        />
      </div>
      <div className="property-details">
        <h3>{title}</h3>
        <p className="property-price">{price}</p>
        <p className="property-address">{address}</p>
        <div className="property-info">
          <div className="property-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>{beds} Beds</span>
          </div>
          <div className="property-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{baths} Baths</span>
          </div>
          <div className="property-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 18v-1c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1H2v2h20v-2h-2zm-5-5v-3H9v3H5l7-7 7 7h-4z" />
            </svg>
            <span>{area} sq.ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/property/${id}`); // Navigate to the property details page
  };

  return (
    <div className="property-container">
      <h1>Explore Our Top Properties</h1>
      <section className="property-grid">
        {propertyData.slice(0, 3).map((property) => ( // Display top 3 properties
          <div key={property.id} onClick={() => handleCardClick(property.id)}>
            <PropertyCard
              imageUrl={property.imageUrl}
              title={property.title}
              price={property.price}
              address={property.address}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PropertyGrid;