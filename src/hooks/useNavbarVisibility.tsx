import { useCallback, useEffect, useState } from 'react';
import { useStore } from '../store/store';

export const useNavbarVisibility = () => {
  const [oldScrollYPosition, setOldScrollYPosition] = useState(0);
  const [isScrollDownward, setIsScrollDownward] = useState(false);

  const closeHiddenMenu = useStore((state) => state.closeHiddenMenu);

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

  return { isScrollDownward };
};
