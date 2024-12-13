import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import SlideButton from './SlideButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">WERNER HOME</div>
      
      {/* Hamburger icon (visible only on small screens) */}
      <button className="hamburger" onClick={toggleMenu}>
        {/* Simple three-bar icon (SVG or simple divs) */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="2" fill="#000"/>
          <rect x="3" y="11" width="18" height="2" fill="#000"/>
          <rect x="3" y="17" width="18" height="2" fill="#000"/>
        </svg>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Property</a>
        <a href="#">Blogs</a>
      </div>
      <div className='slide-button-container'>
      <SlideButton />
      </div>
    </nav>
  );
};

export default Navbar;
