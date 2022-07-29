import { HeaderLogo } from 'assets/svgs';
import styles from './header.module.scss';
import Button from 'components/Button/Button';

import useMovePage from 'hooks/useMovePage';

const Header = () => {
  const { moveThePage } = useMovePage();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <button type='button' onClick={() => moveThePage('/')}>
          <HeaderLogo className={styles.logo} />
        </button>
        <Button desc='GitHub' size='small' onClick={() => window.open('www.naver.com')} />
      </div>
    </header>
  );
};

export default Header;
