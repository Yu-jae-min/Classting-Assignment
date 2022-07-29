import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { correctCount, incorrectCount, timeCount } from 'states/atom';

import styles from './completion.module.scss';

const Completion = () => {
  const navigate = useNavigate();
  const countCorrect = useRecoilValue(correctCount);
  const countIncorrect = useRecoilValue(incorrectCount);
  const time = useRecoilValue(timeCount);
  const resetTime = useResetRecoilState(timeCount);
  const resetCorrect = useResetRecoilState(correctCount);

  const ITEM_LIST = [
    { id: 1, title: '소요 시간', data: time },
    { id: 2, title: '정답 개수', data: countCorrect },
    { id: 3, title: '오답 개수', data: countIncorrect },
  ];

  const goToProgress = () => {
    resetTime();
    resetCorrect();
    navigate('/progress');
  };

  const goToHome = () => {
    resetTime();
    resetCorrect();
    navigate('/');
  };

  return (
    <div className={styles.completion}>
      <div className={styles.rateWrap}>
        {ITEM_LIST.map(({ id, title, data }) => {
          return (
            <div key={id} className={styles.rateItem}>
              <span className={styles.title}>{title}</span>
              <span className={styles.data}>{data}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonWrap}>
        <Button desc='다시 풀기' size='normal' onClick={goToProgress} />
        <Button desc='홈으로' size='normal' onClick={goToHome} />
      </div>
    </div>
  );
};

export default Completion;
