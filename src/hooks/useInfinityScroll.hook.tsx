import { useCallback, useEffect, useState } from 'react';

export const useInfinityScroll = (dataLength: number) => {
  const [infinitySlice, setInfinitySlice] = useState(1);

  const handleScroll = useCallback(() => {
    const bottomMargin = 200;
    const isPageAtTheBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomMargin;

    if (isPageAtTheBottom && infinitySlice < dataLength) setInfinitySlice((prev) => prev + 1);
  }, [dataLength, infinitySlice]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { infinitySlice };
};
