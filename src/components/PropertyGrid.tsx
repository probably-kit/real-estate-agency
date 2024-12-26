// PropertyGrid.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../Contexts/PropertiesContext';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';

// Define the possible city options
type CityOption = 'gdansk' | 'sopot' | 'gdynia' | 'rumia' | 'reda' | ''; 
// '' represents "All Cities"

// Define the props interface
interface PropertyGridProps {
  showFilters?: boolean;      // Determines whether to display the filters section
  displayCount?: number;      // Number of property cards to display; if undefined, display all
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  showFilters = true,        // Default to true if not provided
  displayCount,              // Undefined by default
}) => {
  const navigate = useNavigate();
  const { properties } = useProperties();

  // --- Filter States ---
  const [searchText, setSearchText] = useState('');
  const [cityFilter, setCityFilter] = useState<CityOption>('');
  const [primaryMarketFilter, setPrimaryMarketFilter] = useState(false);
  
  // Price range states
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000); // Set any default upper bound

  const handleCardClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  // --- Filter the properties based on the current filter states ---
  const filteredProperties = properties.filter((property) => {
    // 1) Search filter: check if the title includes the search text
    if (searchText) {
      const lowerTitle = property.title.toLowerCase();
      if (!lowerTitle.includes(searchText.toLowerCase())) {
        return false;
      }
    }

    // 2) City filter (only apply if cityFilter is not empty)
    if (cityFilter && property.city !== cityFilter) {
      return false;
    }

    // 3) Primary Market filter
    if (primaryMarketFilter && property.primaryMarket !== true) {
      return false;
    }

    // 4) Price Range filter
    // Convert price string to numeric value, e.g., "$450,000" to 450000
    const numericPrice = parseInt(property.price.replace(/[^\d]/g, ''), 10);
    if (numericPrice < minPrice || numericPrice > maxPrice) {
      return false;
    }

    return true; // Property passes all filters
  });

  // --- Determine the properties to display based on displayCount ---
  const displayedProperties = displayCount !== undefined
    ? filteredProperties.slice(0, displayCount)
    : filteredProperties;

  return (
    <div className="property-container">
      <h1>Explore Our Top Properties</h1>

      {/* --- Filters Section (conditionally rendered based on showFilters prop) --- */}
      {showFilters && (
        <div className="filters">
          {/* Search by Title */}
          <div className="filter-item">
            <label htmlFor="searchText">Search by Title:</label>
            <input
              type="text"
              id="searchText"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="e.g. Sunnyvale..."
            />
          </div>

          {/* City Filter */}
          <div className="filter-item">
            <label htmlFor="cityFilter">City:</label>
            <select
              id="cityFilter"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value as CityOption)}
            >
              <option value="">All Cities</option>
              <option value="gdansk">Gdansk</option>
              <option value="sopot">Sopot</option>
              <option value="gdynia">Gdynia</option>
              <option value="rumia">Rumia</option>
              <option value="reda">Reda</option>
            </select>
          </div>

          {/* Primary Market Filter */}
          <div className="filter-item">
            <label htmlFor="primaryMarket">Primary Market:</label>
            <input
              type="checkbox"
              id="primaryMarket"
              checked={primaryMarketFilter}
              onChange={(e) => setPrimaryMarketFilter(e.target.checked)}
            />
          </div>

          {/* Price Range Filter */}
          <div className="filter-item price-range">
            <label htmlFor="minPrice">Min Price:</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              min={0}
              placeholder="0"
            />
            <label htmlFor="maxPrice">Max Price:</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              min={0}
              placeholder="1000000"
            />
          </div>
        </div>
      )}

      {/* --- Display Filtered Properties --- */}
      <section className="property-grid">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <div 
              key={property.id} 
              onClick={() => handleCardClick(property.id)} 
              className="property-card-wrapper"
            >
              <PropertyCard id={property.id} />
            </div>
          ))
        ) : (
          <p>No properties match your filters.</p>
        )}
      </section>
    </div>
  );
};

export default PropertyGrid;
