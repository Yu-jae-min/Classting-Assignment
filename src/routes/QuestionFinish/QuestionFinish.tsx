import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { correctCountState, incorrectCountState, timeCountState } from 'states/atom';

import styles from './questionFinish.module.scss';

const QuestionFinish = () => {
  const correctCount = useRecoilValue(correctCountState);
  const incorrectCount = useRecoilValue(incorrectCountState);
  const timeCount = useRecoilValue(timeCountState);

  const resetTimeCount = useResetRecoilState(timeCountState);
  const resetCorrectCount = useResetRecoilState(correctCountState);

  const navigate = useNavigate();

  const goToPage = (page: string) => {
    resetTimeCount();
    resetCorrectCount();
    navigate(page);
  };

  const ITEM_LIST = [
    { id: 1, title: '소요 시간', data: timeCount },
    { id: 2, title: '정답 개수', data: correctCount },
    { id: 3, title: '오답 개수', data: incorrectCount },
  ];

  return (
    <div className={styles.questionFinish}>
      <div className={styles.contentsWrap}>
        {ITEM_LIST.map(({ id, title, data }) => {
          return (
            <div key={id} className={styles.contants}>
              <span className={styles.title}>{title}</span>
              <span className={styles.data}>{data}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonWrap}>
        <Button desc='다시 풀기' size='normal' onClick={() => goToPage('/questionProgress')} />
        <Button desc='홈으로' size='normal' onClick={() => goToPage('/')} />
      </div>
    </div>
  );
};

export default QuestionFinish;
