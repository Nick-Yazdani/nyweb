import { useState, useEffect } from 'react';

const useScrollDetect = (ref) => {
  const [scrolledPast, setScrolledPast] = useState(false);

  const isScrolledIntoView = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    setScrolledPast(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        isScrolledIntoView(ref.current);
      }
    });
  }, [ref]);

  return scrolledPast;
};

export default useScrollDetect;
