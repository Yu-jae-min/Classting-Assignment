import Button from 'components/Button/Button';

import useMovePage from 'hooks/useMovePage';

import styles from './home.module.scss';

const Home = () => {
  const { moveThePage } = useMovePage();

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        간단한 퀴즈 풀기 게임입니다. <br /> 퀴즈 풀기 버튼을 클릭해주세요.
      </h1>
      <div className={styles.buttonWrap}>
        <Button desc='퀴즈 풀기' size='normal' onClick={() => moveThePage('/progress')} />
        <Button desc='오답 노트' size='normal' onClick={() => moveThePage('/incorrectNote')} />
        <Button desc='차트 보기' size='normal' onClick={() => moveThePage('/chart')} />
      </div>
    </div>
  );
};

export default Home;
