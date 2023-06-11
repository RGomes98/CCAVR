import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
  const [isLowEnough, setIsLowEnough] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const handleScroll = () => {
    const minimunScrollHeight = 500;
    scrollY >= minimunScrollHeight ? setIsLowEnough(true) : setIsLowEnough(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isLowEnough, scrollToTop };
};
