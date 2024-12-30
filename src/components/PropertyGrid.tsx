import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../Contexts/PropertiesContext';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';
import './Slider.css';
import ReactSlider from 'react-slider';

type CityOption = 'gdansk' | 'sopot' | 'gdynia' | 'rumia' | 'reda';

interface PropertyGridProps {
  showFilters?: boolean;
  displayCount?: number;
}

interface ThumbProps {
  style?: React.CSSProperties;
  [key: string]: any; // Dynamic props if needed
}

interface ThumbState {
  valueNow: number; // Current value of the thumb
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
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleCityToggle = (city: CityOption) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handlePrimaryMarketToggle = () => {
    setPrimaryMarketFilter((prev) => !prev);
  };

  const handleSliderChange = (values: [number, number]) => {
    setPriceRange(values);
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
    if (numericPrice < priceRange[0] || numericPrice > priceRange[1]) {
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

      {/* Conditionally render the entire filterd-section based on showFilters */}
      {showFilters && (<div>
          <div className="city-filters">
            {['gdansk', 'sopot', 'gdynia', 'rumia', 'reda'].map((city) => (
              <button
                key={city}
                className={`city-button ${
                  selectedCities.includes(city as CityOption) ? 'active' : ''
                }`}
                onClick={() => handleCityToggle(city as CityOption)}
              >
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </button>
            ))}

            {/* Primary Market Button */}
            <button
              className={`city-button ${primaryMarketFilter ? 'active' : ''}`}
              onClick={handlePrimaryMarketToggle}
            >
              Primary Market
            </button>
          </div>

          {/* Toggleable Filters */}
          <div
            className="filter-toggle"
            onClick={() => setFiltersVisible(!filtersVisible)}
          >
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

          {filtersVisible && (
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

              {/* Removed the Primary Market Checkbox */}

              <div className="filter-item">
                <label>Price Range:</label>
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  value={priceRange}
                  min={0}
                  max={1000000}
                  step={10000}
                  minDistance={50000}
                  onChange={handleSliderChange}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  ariaValuetext={(state: ThumbState) =>
                    `Thumb value ${state.valueNow}`
                  }
                  renderThumb={(props: ThumbProps) => (
                    <div {...props}></div>
                  )}
                />
                <div className="price-range-values">
                  <span>Min: ${priceRange[0].toLocaleString()}</span>
                  <span>Max: ${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
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
