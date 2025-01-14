import { useStore } from '../../store/store';
import { Links } from './Links';

import styles from '../../stylesheets/components/NavigationBarStyles/HiddenMenu.module.scss';

export const HiddenMenu: React.FC = () => {
  const isHiddenMenuOpen = useStore((state) => state.isHiddenMenuOpen);
  const showHiddenMenu = isHiddenMenuOpen ? `${styles.container} ${styles.visible}` : styles.container;

  return (
    <div className={showHiddenMenu}>
      <div className={styles.wrapper}>
        <Links />
      </div>
    </div>
  );
};
