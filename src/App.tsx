import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollPosition from './components/ScrollPosition';
import { BlogProvider } from './Contexts/BlogContext';
import { PropertiesProvider } from './Contexts/PropertiesContext';
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
import BlogList from './components/BlogList';
import BlogPostPage from './components/BlogPost';

const App: React.FC = () => {
  return (
    <div className="container">
      <ScrollPosition />
      <Navbar />
      <PropertiesProvider>
        <BlogProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeaturesSection />
                  <PropertyGrid showFilters={false} displayCount={3} />
                  <StandardsGrid />
                  <FaqSection />
                  <TestimonialSlider />
                  <ContactSection />
                </>
              }
            />
            <Route
              path="/property"
              element={<PropertyGrid displayCount={Infinity} />}
            />
            <Route path="/property/:id" element={<PropertyItem />} />
            <Route
              path="/about"
              element={
                <>
                  <StandardsGrid />
                  <TestimonialSlider />
                  <FaqSection />
                </>
              }
            />
            <Route
              path="/blog"
              element={<BlogList />}
            />
             <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </BlogProvider>
      </PropertiesProvider>
      <Footer />
    </div>
  );
};

export default App;
