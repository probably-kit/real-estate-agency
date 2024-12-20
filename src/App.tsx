import { Routes, Route } from 'react-router-dom';
import { PropertiesProvider } from './Contexts/PropertiesContext'
import PropertyGrid from './components/PropertyCard';
import FaqSection from './components/FAQSection';
import TestimonialSlider from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StandardsGrid from './components/StandardsGrid';
import ContactSection from './components/ContactSection';
import HalfImageSection from './components/HalfImage';

function App() {


  return (
    <div className="container">
      <Navbar />
      <PropertiesProvider>
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
            <FeaturesSection />
            <PropertyGrid />
            <StandardsGrid />
            <FaqSection />
            <TestimonialSlider />
            <ContactSection />
          </>
        } />
        <Route path='/property-item' element={
          <>
            <HalfImageSection
              title="What Makes Us Your Ideal Real Estate Partner?"
              description="Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction."
              imageSrc="https://via.placeholder.com/400x300"
              buttonCaption="Contact Us"
              imagePosition="right"
            />
            <HalfImageSection
              title="What Makes Us Your Ideal Real Estate Partner?"
              description="Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction."
              imageSrc="https://via.placeholder.com/400x300"
              buttonCaption="Contact Us"
              imagePosition="left"
            />
            <HalfImageSection
              title="What Makes Us Your Ideal Real Estate Partner?"
              description="Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction."
              imageSrc="https://via.placeholder.com/400x300"
              buttonCaption="Contact Us"
              imagePosition="right"
            />
          </>
        }/>
      </Routes>
      </PropertiesProvider>



      <Footer />
    </div>
  )
}

export default App
