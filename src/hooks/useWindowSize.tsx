import { useCallback, useEffect, useState } from 'react';

export const useWindowSize = (windowSizeLimit: number, action?: () => void) => {
  const [isSmallerThanLimit, setIsSmallerThanLimit] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth <= windowSizeLimit) {
      setIsSmallerThanLimit(true);
    } else {
      if (action) action();
      setIsSmallerThanLimit(false);
    }
  }, [action, windowSizeLimit]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.innerWidth <= windowSizeLimit
      ? setIsSmallerThanLimit(true)
      : setIsSmallerThanLimit(false);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, windowSizeLimit]);

  return { isSmallerThanLimit, windowWidth };
};
