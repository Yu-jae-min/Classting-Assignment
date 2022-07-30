import Button from 'components/Button/Button';

import useNavigation from 'hooks/useNavigation';

import { Logo } from 'assets/svgs';

import styles from './header.module.scss';

const Header = () => {
  const { navigation } = useNavigation();
  const url = 'https://github.com/Yu-jae-min/Classting-Assignment';

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <button type='button' onClick={() => navigation('/')}>
          <Logo className={styles.logo} />
        </button>
        <Button desc='GitHub' size='small' onClick={() => window.open(url)} />
      </div>
    </header>
  );
};

export default Header;
