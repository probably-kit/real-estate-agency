import React, { useState, useEffect } from 'react';
import "./Navbar.css"

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">WERNER HOME</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Property</a>
        <a href="#">Blogs</a>
      </div>
      <div className='connect-btn'>
        <a href="">Let's talk</a>
        <svg
          className="icon"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            className="icon-path"
            
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"
          />
        </svg>
      </div>

    </nav>
  )
}

export default Navbar;