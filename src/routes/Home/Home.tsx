import Button from 'components/Button/Button';

import useNavigation from 'hooks/useNavigation';

import styles from './home.module.scss';

const Home = () => {
  const { navigation } = useNavigation();

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        간단한 퀴즈 풀기 게임입니다. <br /> 퀴즈 풀기 버튼을 클릭해주세요.
      </h1>
      <div className={styles.buttonWrap}>
        <Button desc='퀴즈 풀기' size='normal' onClick={() => navigation('/progress')} />
        <Button desc='오답 노트' size='normal' onClick={() => navigation('/incorrectNote')} />
        <Button desc='차트 보기' size='normal' onClick={() => navigation('/chart')} />
      </div>
    </div>
  );
};

export default Home;
