'use client';

import { CircleArrowRight as LogoCircleArrow } from '../SVGs/CircleArrowRight';
import { useScrollToTop } from '../../hooks/useScrollToTop';

import styles from '../../stylesheets/components/ScrollToTopStyles/ScrollArrow.module.scss';

export const ScrollToTopArrow: React.FC = () => {
  const { isLowEnough, scrollToTop } = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label='scroll-to-top'
      className={isLowEnough ? `${styles.button} ${styles.fadeButton}` : styles.button}
    >
      <LogoCircleArrow />
    </button>
  );
};
