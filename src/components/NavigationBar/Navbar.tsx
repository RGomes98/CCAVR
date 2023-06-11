'use client';

import { useNavbarVisibility } from '../../hooks/useNavbarVisibility';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Close as LogoClose } from '../SVGs/Close';
import { Bars as LogoOpen } from '../SVGs/Bars';
import { usePathname } from 'next/navigation';
import { useStore } from '../../store/store';
import { HiddenMenu } from './HiddenMenu';
import { Links } from './Links';

import styles from '../../stylesheets/components/NavigationBarStyles/Navbar.module.scss';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const isHiddenMenuOpen = useStore((state) => state.isHiddenMenuOpen);
  const toggleHiddenMenu = useStore((state) => state.toggleHiddenMenu);
  const closeHiddenMenu = useStore((state) => state.closeHiddenMenu);

  const pathname = usePathname();
  const isAtCurumim = pathname === '/curumim';

  const { isSmallerThanLimit } = useWindowSize(isAtCurumim ? 1500 : 1280, closeHiddenMenu);
  const { isScrollDownward, oldScrollYPosition } = useNavbarVisibility();

  const navbarTransparency =
    oldScrollYPosition > 250 && !isHiddenMenuOpen ? styles.transparent : '';

  const showNavbar = isScrollDownward
    ? styles.container
    : `${styles.container} ${styles.showNavbar}`;

  return (
    <nav className={`${showNavbar} ${navbarTransparency}`}>
      {isAtCurumim ? (
        <Image
          width={160}
          height={160}
          alt='logo-curumim'
          className={styles.primaryLogo}
          src='/logos/svgs/institution/logoCurumim.svg'
        />
      ) : (
        <Image
          width={160}
          height={160}
          alt='logo-cca'
          className={styles.primaryLogo}
          src='/logos/svgs/institution/logoCCA.svg'
        />
      )}

      {!isSmallerThanLimit && <Links />}
      {isSmallerThanLimit && (
        <button onClick={() => toggleHiddenMenu()} className={styles.hiddenButton}>
          {isHiddenMenuOpen ? <LogoClose /> : <LogoOpen />}
        </button>
      )}
      {isSmallerThanLimit && <HiddenMenu />}
    </nav>
  );
};
