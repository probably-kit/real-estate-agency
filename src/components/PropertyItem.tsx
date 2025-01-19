import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import SlideButton from "./SlideButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyItem.css";
import { useProperties } from "../Contexts/PropertiesContext";
import { Property } from "../PropertyTypes";

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { properties } = useProperties();

  const property = properties.find((p: Property) => p.id === id);

  if (!property) {
    return <div className="property-details-not-found">{t("propertyDetails.notFound")}</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imagesToShow = property.images && property.images.length > 0
    ? property.images
    : [property.imageUrl];

  return (
    <div className="property-details-container">
      {imagesToShow.length === 1 ? (
        <div className="single-image-container">
          <img src={imagesToShow[0]} alt={property.title} className="slider-image" />
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {imagesToShow.map((imgUrl, index) => (
            <div key={index} className="slider-image-container">
              <img src={imgUrl} alt={property.title} className="slider-image" />
            </div>
          ))}
        </Slider>
      )}

      <div className="property-details-info">
        <p className="property-price">{t("propertyDetails.price")} {property.price}</p>
        <p className="property-address">{t("propertyDetails.address")} {property.address}</p>

        <div className="property-specs">
          <span className="property-beds">{t("propertyDetails.beds", { count: property.beds })}</span>
          <span className="property-baths">{t("propertyDetails.baths", { count: property.baths })}</span>
          <span className="property-area">{t("propertyDetails.area", { count: property.area })}</span>
        </div>

        <p className="property-city">
          {t("propertyDetails.city")} {t(`propertyDetails.cities.${property.city.toLowerCase()}`)}
        </p>
        <div className="bottom-container">
          <SlideButton caption={t("propertyDetails.buttons.buy")} width="9em" />
          {property.primaryMarket && (
            <div className="property-badge-primary">
              <span>{t("propertyDetails.primaryMarket")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
