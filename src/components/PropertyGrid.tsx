import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../Contexts/PropertiesContext';
import { useTranslation } from 'react-i18next';

import PropertyCard from './PropertyCard';
import './PropertyCard.css';

interface PropertyGridProps {
  showFilters?: boolean; // Optional prop
  displayCount?: number; // Optional prop
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  showFilters = true,
  displayCount,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { properties } = useProperties();

  // -- Existing filters --
  // const [searchText, setSearchText] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [primaryMarketFilter, setPrimaryMarketFilter] = useState(false);


  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');


  const [rooms, setRooms] = useState<string>('');

  const [minArea, setMinArea] = useState<string>('');
  const [maxArea, setMaxArea] = useState<string>('');


  const [filtersVisible, setFiltersVisible] = useState(false);


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

  const handlePrimaryMarketToggle = () => {
    setPrimaryMarketFilter((prev) => !prev);
  };


  const filteredProperties = properties.filter((property) => {

    // if (searchText && !property.title.toLowerCase().includes(searchText.toLowerCase())) {
    //   return false;
    // }

    // City filter
    if (selectedCities.length > 0 && !selectedCities.includes(property.city)) {
      return false;
    }

    // Primary market
    if (primaryMarketFilter && property.primaryMarket !== true) {
      return false;
    }

    // Price
    const numericPrice = parseInt(property.price.replace(/[^\d]/g, ''), 10) || 0;
    if (minPrice && numericPrice < Number(minPrice)) {
      return false;
    }
    if (maxPrice && numericPrice > Number(maxPrice)) {
      return false;
    }

    if (rooms && rooms !== '0') {

      const propertyRooms = Number(property.beds);
      const selectedRooms = Number(rooms);

      if (selectedRooms === 5) {
        if (propertyRooms < 5) return false;
      } else {
        if (propertyRooms !== selectedRooms) return false;
      }
    }


    if (minArea && property.area < Number(minArea)) {
      return false;
    }
    if (maxArea && property.area > Number(maxArea)) {
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

              {/* <div className="filter-item">
                <label htmlFor="searchText">{t('propertyGrid.filters.searchLabel')}</label>
                <input
                  type="text"
                  id="searchText"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={t('propertyGrid.filters.searchPlaceholder')}
                />
              </div> */}


              <div className="filter-item">
                <label>{t('propertyGrid.filters.priceRangeLabel')}</label>
                <div className="price-range-values">
                  <div>
                    <input
                      type="number"
                      placeholder={t('propertyGrid.filters.minPrice')}
                      value={minPrice}
                      className="filter-input"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder={t('propertyGrid.filters.maxPrice')}
                      value={maxPrice}
                      className="filter-input"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="filter-item">
                <label>{'Area, м²'}</label>
                <div className="area-range-inputs">
                  <input
                    type="number"
                    placeholder="from"
                    className="filter-input"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="to"
                    className="filter-input"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                  />
                </div>
              </div>


              <div className="filter-item">
                <label htmlFor="rooms">Bedrooms</label>
                <select
                  id="rooms"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="filter-select"
                >
                  <option value="0">Choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
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
