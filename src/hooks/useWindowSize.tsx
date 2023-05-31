import { useCallback, useEffect, useState } from 'react';

export const useWindowSize = (windowSizeLimit: number, action?: () => void) => {
  const [isSmallerThanLimit, setIsSmallerThanLimit] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= windowSizeLimit) {
      setIsSmallerThanLimit(true);
    } else {
      if (action) action();
      setIsSmallerThanLimit(false);
    }
  }, [action, windowSizeLimit]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (window.innerWidth <= windowSizeLimit) setIsSmallerThanLimit(true);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, windowSizeLimit]);

  return { isSmallerThanLimit };
};
