import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-8 right-8 w-12 h-12 bg-orange hover:scale-105 duration-300 text-white rounded-full shadow-lg  ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
    aria-label="Scroll to top"
  >
     <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default ScrollToTop;
