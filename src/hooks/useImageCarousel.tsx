import { carouselContent } from '../data/carouselContent';
import { RefObject, useEffect, useState } from 'react';

export const useImageCarousel = (ref: RefObject<HTMLDivElement>, ms: number) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const carouselContentLength = carouselContent.length - 1;

    if (ref.current) ref.current.style.backgroundImage = `url(${carouselContent[imageIndex]})`;
    const delay = setTimeout(() => {
      setImageIndex((prev) => (prev === carouselContentLength ? 0 : prev + 1));
    }, ms);
    return () => clearTimeout(delay);
  }, [ref, ms, , imageIndex]);
};
