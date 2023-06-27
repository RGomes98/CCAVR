import { useEffect, useState } from 'react';

export const useImageCarousel = (content: string[], ms: number) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const carouselContentLength = content.length - 1;

    const delay = setTimeout(() => {
      setImageIndex((prev) => (prev === carouselContentLength ? 0 : prev + 1));
    }, ms);

    return () => clearTimeout(delay);
  }, [ms, content, imageIndex]);

  return { imageIndex };
};
