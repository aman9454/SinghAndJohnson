import React, { useState, useEffect, useRef } from 'react';

const FadeInOut = ({ children, threshold = 0.1 }) => {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate opacity based on how much of the component is visible
        const ratio = entry.intersectionRatio;
        setOpacity(ratio);
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i * 0.01), // Track visibility at every 1%
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: opacity,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOut;