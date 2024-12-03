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
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Property</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#" className="btn">Let's Talk</a></li>
          </ul>
        </nav>
    )
}

export default Navbar;