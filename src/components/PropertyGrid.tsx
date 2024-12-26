import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../Contexts/PropertiesContext';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';

type CityOption = 'gdansk' | 'sopot' | 'gdynia' | 'rumia' | 'reda';

interface PropertyGridProps {
  showFilters?: boolean;
  displayCount?: number;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  showFilters = true,
  displayCount,
}) => {
  const navigate = useNavigate();
  const { properties } = useProperties();

  const [searchText, setSearchText] = useState('');
  const [selectedCities, setSelectedCities] = useState<CityOption[]>([]);
  const [primaryMarketFilter, setPrimaryMarketFilter] = useState(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [filtersVisible, setFiltersVisible] = useState(false); // Toggle for additional filters

  const handleCityToggle = (city: CityOption) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((c) => c !== city)
        : [...prev, city]
    );
  };

  const filteredProperties = properties.filter((property) => {
    if (
      searchText &&
      !property.title.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false;
    }
    if (selectedCities.length > 0 && !selectedCities.includes(property.city)) {
      return false;
    }
    if (primaryMarketFilter && property.primaryMarket !== true) {
      return false;
    }
    const numericPrice = parseInt(property.price.replace(/[^\d]/g, ''), 10);
    if (numericPrice < minPrice || numericPrice > maxPrice) {
      return false;
    }
    return true;
  });

  const displayedProperties =
    displayCount !== undefined
      ? filteredProperties.slice(0, displayCount)
      : filteredProperties;

  return (
    <div className="property-container">
      <h1>Explore Our Top Properties</h1>

      {/* City Buttons */}
      <div className="city-filters">
        {['gdansk', 'sopot', 'gdynia', 'rumia', 'reda'].map((city) => (
          <button
            key={city}
            className={`city-button ${
              selectedCities.includes(city) ? 'active' : ''
            }`}
            onClick={() => handleCityToggle(city as CityOption)}
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </button>
        ))}
      </div>

      {/* Toggleable Filters */}
      <div className="filter-toggle" onClick={() => setFiltersVisible(!filtersVisible)}>
        <svg
          className={`arrow-icon ${filtersVisible ? 'rotated' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {filtersVisible && showFilters && (
        <div className="filters">
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

          <div className="filter-item">
            <label htmlFor="primaryMarket">Primary Market:</label>
            <input
              type="checkbox"
              id="primaryMarket"
              checked={primaryMarketFilter}
              onChange={(e) => setPrimaryMarketFilter(e.target.checked)}
            />
          </div>

          <div className="filter-item price-range">
            <label htmlFor="minPrice">Min Price:</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              min={0}
            />
            <label htmlFor="maxPrice">Max Price:</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              min={0}
            />
          </div>
        </div>
      )}

      <section className="property-grid">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => navigate(`/property/${property.id}`)}
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
