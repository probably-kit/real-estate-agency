import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollPosition = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. On component mount, restore saved scroll position if it exists
    const savedScrollPos = sessionStorage.getItem(location.key);
    if (savedScrollPos) {
      window.scrollTo(0, parseInt(savedScrollPos, 10));
    } else {
      // If no saved position, scroll to top (first visit)
      window.scrollTo(0, 0);
    }

    // 2. On component unmount, save current scroll position
    return () => {
      sessionStorage.setItem(location.key, window.scrollY.toString());
    };
  }, [location]);

  return null;
};

export default ScrollPosition;
