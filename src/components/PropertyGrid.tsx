import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../Contexts/PropertiesContext';
import { useTranslation } from 'react-i18next';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';
import './Slider.css';
import ReactSlider from 'react-slider';

interface PropertyGridProps {
  showFilters?: boolean; // Optional prop
  displayCount?: number; // Optional prop
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ showFilters = true, displayCount }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { properties } = useProperties();

  const [searchText, setSearchText] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [primaryMarketFilter, setPrimaryMarketFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // City data for display and internal filter matching
  const cities = [
    { display: t('propertyGrid.cities.0'), value: 'gdansk' },
    { display: t('propertyGrid.cities.1'), value: 'sopot' },
    { display: t('propertyGrid.cities.2'), value: 'gdynia' },
    { display: t('propertyGrid.cities.3'), value: 'rumia' },
    { display: t('propertyGrid.cities.4'), value: 'reda' },
  ];

  const handleCityToggle = (cityValue: string) => {
    setSelectedCities((prev) =>
      prev.includes(cityValue) ? prev.filter((c) => c !== cityValue) : [...prev, cityValue]
    );
  };

  const handlePrimaryMarketToggle = () => setPrimaryMarketFilter((prev) => !prev);

  const handleSliderChange = (values: [number, number]) => setPriceRange(values);

  const filteredProperties = properties.filter((property) => {
    if (searchText && !property.title.toLowerCase().includes(searchText.toLowerCase())) {
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
      <h1>{t('propertyGrid.heading')}</h1>
      {showFilters && (
        <div>
          <div className="city-filters">
            {cities.map((city) => (
              <button
                key={city.value}
                className={`city-button ${selectedCities.includes(city.value) ? 'active' : ''}`}
                onClick={() => handleCityToggle(city.value)}
              >
                {city.display}
              </button>
            ))}
            <button
              className={`city-button ${primaryMarketFilter ? 'active' : ''}`}
              onClick={handlePrimaryMarketToggle}
            >
              {t('propertyGrid.filters.primaryMarket')}
            </button>
          </div>
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
                <label htmlFor="searchText">{t('propertyGrid.filters.searchLabel')}</label>
                <input
                  type="text"
                  id="searchText"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={t('propertyGrid.filters.searchPlaceholder')}
                />
              </div>
              <div className="filter-item">
                <label>{t('propertyGrid.filters.priceRangeLabel')}</label>
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
                />
                <div className="price-range-values">
                  <span>{`${t('propertyGrid.filters.minPrice')} $${priceRange[0].toLocaleString()}`}</span>
                  <span>{`${t('propertyGrid.filters.maxPrice')} $${priceRange[1].toLocaleString()}`}</span>
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
          <p>{t('propertyGrid.noProperties')}</p>
        )}
      </section>
    </div>
  );
};

export default PropertyGrid;
