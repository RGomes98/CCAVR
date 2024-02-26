'use client';

import { useNavbarVisibility } from '../../hooks/useNavbarVisibility';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Close as LogoClose } from '../SVGs/Close';
import { Bars as LogoOpen } from '../SVGs/Bars';
import { usePathname } from 'next/navigation';
import { useStore } from '../../store/store';
import { HiddenMenu } from './HiddenMenu';
import { Links } from './Links';

import styles from '../../stylesheets/components/NavigationBarStyles/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const isHiddenMenuOpen = useStore((state) => state.isHiddenMenuOpen);
  const toggleHiddenMenu = useStore((state) => state.toggleHiddenMenu);
  const closeHiddenMenu = useStore((state) => state.closeHiddenMenu);

  const pathname = usePathname();
  const isAtNews = pathname.includes('noticias');
  const isAtHome = pathname === '/';

  const { isScrollDownward, oldScrollYPosition } = useNavbarVisibility();
  const { isSmallerThanLimit } = useWindowSize(1280, closeHiddenMenu);
  const { scrollToTop } = useScrollToTop();

  const navbarTransparency = oldScrollYPosition > 250 && !isHiddenMenuOpen ? styles.transparent : '';

  const navbarReducedPadding = isAtNews ? styles.reducedPadding : '';

  const showNavbar = isScrollDownward ? styles.container : `${styles.container} ${styles.showNavbar}`;

  return (
    <nav
      className={`${showNavbar} ${navbarTransparency} ${navbarReducedPadding}`}
      data-hidden-menu={isHiddenMenuOpen}
    >
      {isAtHome ? (
        <button onClick={scrollToTop} className={styles.homeButton}>
          <Image
            width={160}
            height={160}
            alt='logo-cca'
            className={styles.primaryLogo}
            src='/logos/svgs/institution/logoCCA.svg'
          />
        </button>
      ) : (
        <Link href='/'>
          <Image
            width={160}
            height={160}
            alt='logo-cca'
            className={styles.primaryLogo}
            src='/logos/svgs/institution/logoCCA.svg'
          />
        </Link>
      )}
      {!isSmallerThanLimit && <Links />}
      {isSmallerThanLimit && (
        <button
          aria-label='hidden-menu-button'
          className={styles.hiddenButton}
          onClick={() => toggleHiddenMenu()}
        >
          {isHiddenMenuOpen ? <LogoClose /> : <LogoOpen />}
        </button>
      )}
      {isSmallerThanLimit && <HiddenMenu />}
    </nav>
  );
};
