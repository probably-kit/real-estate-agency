// import React from "react";
import { useParams } from "react-router-dom";  
import { useProperties } from "../Contexts/PropertiesContext"; 
import { Property } from "../PropertyTypes";
import HalfImageSection from "./HalfImage";

const PropertyItem = () => {
  // Grab the "id" from the route /property/:id
  const { id } = useParams();

  // Access properties from context
  const { properties } = useProperties();

  // Find the property that matches this "id"
  const property = properties.find((prop: Property) => prop.id === id);

  // In case there's no matching property, handle gracefully
  if (!property) {
    return (
      <div>
        <h2>Property not found</h2>
      </div>
    );
  }

  return (
    <>
      <HalfImageSection
        title={property.title}
        description={
          `Price: ${property.price}\n` +
          `Address: ${property.address}\n` +
          `Beds: ${property.beds}, Baths: ${property.baths}, Area: ${property.area} sqft\n`
        }
        imageSrc={property.imageUrl}
        buttonCaption="Contact Us"
        imagePosition="right"
      />
      <HalfImageSection
        title="Some additional section"
        description="You can have multiple HalfImageSections to display more info."
        imageSrc="https://via.placeholder.com/400x300"
        buttonCaption="Another Button"
        imagePosition="left"
      />
      <HalfImageSection
        title="Yet another section"
        description="Feel free to customize further."
        imageSrc="https://via.placeholder.com/400x300"
        buttonCaption="Contact Us"
        imagePosition="right"
      />
    </>
  );
};

export default PropertyItem;
