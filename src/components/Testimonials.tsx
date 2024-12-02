import React, { useState } from 'react';
import './Testimonials.css'; 

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    location: 'New York, NY',
    rating: 5,
    text: 'Working with this team was an amazing experience. They made the process so easy!',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    location: 'Los Angeles, CA',
    rating: 4,
    text: 'The service was exceptional and very professional. Highly recommend!',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Mark Johnson',
    location: 'Chicago, IL',
    rating: 5,
    text: 'They guided me through every step and I felt confident throughout the process.',
    image: 'https://via.placeholder.com/150',
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, location, rating, text, image } = testimonials[currentIndex];

  return (
    <div className="testimonial-slider">
      <h2>What Our Clients Are Saying</h2>
      <div className="testimonial-card">
        <img src={image} alt={`${name}'s testimonial`} className="testimonial-image" />
        <div className="testimonial-content">
          <h3>{name}</h3>
          <p className="location">{location}</p>
          <div className="rating">
            {'⭐'.repeat(rating)}
          </div>
          <p className="testimonial-text">{text}</p>
          <p className="signature">{name}</p>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={handlePrev} className="nav-button prev">&larr;</button>
        <button onClick={handleNext} className="nav-button next">&rarr;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;

