import { Routes, Route } from 'react-router-dom';
import { PropertiesProvider } from './Contexts/PropertiesContext'
import PropertyGrid from './components/PropertyGrid';
import FaqSection from './components/FAQSection';
import TestimonialSlider from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StandardsGrid from './components/StandardsGrid';
import ContactSection from './components/ContactSection';
import PropertyItem from './components/PropertyItem';

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
              <PropertyGrid displayCount={3} />
              <StandardsGrid />
              <FaqSection />
              <TestimonialSlider />
              <ContactSection />
            </>
          } />
          <Route path="/property" element={
            <>
              <PropertyGrid displayCount={Infinity}/>
            </>
          } />
          <Route path="/property/:id" element={
            <>
              <PropertyItem />
            </>
          } />
        </Routes>
      </PropertiesProvider>



      <Footer />
    </div>
  )
}

export default App
