import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
