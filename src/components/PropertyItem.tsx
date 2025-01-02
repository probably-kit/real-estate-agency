
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./PropertyItem.css"
import { useProperties } from "../Contexts/PropertiesContext";
import { Property } from "../PropertyTypes";

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { properties } = useProperties();

  // find the property by ID
  const property = properties.find((p: Property) => p.id === id);

  if (!property) {
    return <div className="property-details-not-found">Property not found.</div>;
  }

  // slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // use multiple images if provided, otherwise fallback to single
  const imagesToShow = property.images && property.images.length > 0
    ? property.images
    : [property.imageUrl];

  return (
    <div className="property-details-container">
      <h1 className="property-details-title">{property.title}</h1>
      
      {/* Slider */}
      <div className="property-details-slider">
        <Slider {...sliderSettings}>
          {imagesToShow.map((imgUrl, index) => (
            <div key={index} className="slider-image-container">
              <img src={imgUrl} alt={property.title} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Detailed Info */}
      <div className="property-details-info">
        <p className="property-price">{property.price}</p>
        <p className="property-address">{property.address}</p>

        <div className="property-specs">
          <span className="property-beds">{property.beds} Beds</span>
          <span className="property-baths">{property.baths} Baths</span>
          <span className="property-area">{property.area} sq.ft</span>
        </div>

        <p className="property-city">City: {property.city}</p>

        {property.primaryMarket && (
          <div className="property-badge-primary">
            Primary Market
          </div>
        )}

        {/* Add any extra info you want to show here */}
        {/* <p className="property-description">{property.description}</p> */}
      </div>
    </div>
  );
};

export default PropertyDetails;
