import PropertyGrid from './components/PropertyCard';
import FaqSection from './components/FAQSection';
import TestimonialSlider from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StandardsGrid from './components/StandardsGrid';
import ContactSection from './components/ContactSection';

function App() {
 

  return (
      <div className="container">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <PropertyGrid/>
        <StandardsGrid/>
        <FaqSection />
        <TestimonialSlider />
        <ContactSection/>
        <Footer />
      </div>
  )
}

export default App
