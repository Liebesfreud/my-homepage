import { useState, useEffect } from "react";

export function useScrollDetection(threshold: number = 50) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('Scroll Y:', scrollY, 'Threshold:', threshold);
      if (scrollY > threshold) {
        console.log('Setting hasScrolled to true');
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return hasScrolled;
}
