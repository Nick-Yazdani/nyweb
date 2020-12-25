import { useState, useEffect } from 'react';

const useScrollDetect = ref => {
  const [scrolledPast, setScrolledPast] = useState(false);

  const isScrolledIntoView = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = elemTop < window.innerHeight / 2 && elemBottom >= 0;

    setScrolledPast(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      isScrolledIntoView(ref.render.current);
    });
  }, [ref]);

  return scrolledPast;
};

export default useScrollDetect;
