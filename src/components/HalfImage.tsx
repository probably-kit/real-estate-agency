import React from 'react';
import './HalfImage.css';

import SlideButton from './SlideButton';

interface HalfImageProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonCaption: string;
  imagePosition?: 'left' | 'right'; // defaults to 'left' if not specified
}

const HalfImageSection: React.FC<HalfImageProps> = ({
  title,
  description,
  imageSrc,
  buttonCaption,
  imagePosition = 'left',
}) => {
  return (
    <div className={`halfImage-container ${imagePosition === 'right' ? 'reverse' : ''}`}>
      <div className="image-section">
        <img src={imageSrc} alt="House" />
      </div>
      <div className="content-section">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <SlideButton caption={buttonCaption} width='8em' />
      </div>
    </div>
  );
};

export default HalfImageSection;
