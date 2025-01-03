
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import SlideButton from "./SlideButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // use multiple images if provided, otherwise fallback to single
  const imagesToShow = property.images && property.images.length > 0
    ? property.images
    : [property.imageUrl];

  return (
    <div className="property-details-container">
      {imagesToShow.length === 1 ? (
        // Just show the single image without Slick
        <div className="single-image-container">
          <img
            src={imagesToShow[0]}
            alt={property.title}
            className="slider-image"
          />
        </div>
      ) : (
        // Otherwise, show the slider
        <Slider {...sliderSettings}>
          {imagesToShow.map((imgUrl, index) => (
            <div key={index} className="slider-image-container">
              <img src={imgUrl} alt={property.title} className="slider-image" />
            </div>
          ))}
        </Slider>
      )}

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
        <div className="bottom-container">
          <SlideButton caption="Buy" width="9em" />
          {property.primaryMarket && (
          <div className="property-badge-primary">
            <span>Primary Market</span>
          </div>
        )}
        </div>
        

        {/* <p className="property-description">{property.description}</p> */}
      </div>
    </div>
  );
};

export default PropertyDetails;
