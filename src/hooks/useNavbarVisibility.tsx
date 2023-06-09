import { useCallback, useEffect, useState } from 'react';

export const useNavbarVisibility = () => {
  const [oldScrollYPosition, setOldScrollYPosition] = useState(0);
  const [isScrollDownward, setIsScrollDownward] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollYPosition = window.scrollY;
    if (oldScrollYPosition > currentScrollYPosition) {
      setIsScrollDownward(false);
    } else {
      setIsScrollDownward(true);
    }
    setOldScrollYPosition(currentScrollYPosition);
  }, [oldScrollYPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isScrollDownward, oldScrollYPosition };
};
