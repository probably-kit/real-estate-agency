import PropertyCard from './components/PropertyCard';
import FaqSection from './components/FAQSection';
import TestimonialSlider from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StandardsGrid from './components/StandardsGrid';

function App() {
  const properties = [
    {
      imageUrl: 'https://via.placeholder.com/400x300',
      title: 'Sunnyvale Retreat',
      price: '$450,000',
      address: '23 Sunnyvale Rd',
      beds: 4,
      baths: 3,
      area: 2500,
    },
    {
      imageUrl: 'https://via.placeholder.com/400x300',
      title: 'Mountain View Escape',
      price: '$550,000',
      address: '45 Mountain View Rd',
      beds: 5,
      baths: 4,
      area: 3000,
    },
    {
      imageUrl: 'https://via.placeholder.com/400x300',
      title: 'Downtown Delight',
      price: '$600,000',
      address: '789 Downtown St',
      beds: 3,
      baths: 2,
      area: 1800,
    },
    // Add more properties as needed
  ];

  return (
    <>
      <div className="container">
        <Navbar />
        <HeroSection />
        <FeaturesSection />

        <section className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imageUrl={property.imageUrl}
              title={property.title}
              price={property.price}
              address={property.address}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
            />
          ))}
        </section>

        <StandardsGrid/>
        <FaqSection />
        <TestimonialSlider />
        <Footer />






      </div>
    </>
  )
}

export default App
