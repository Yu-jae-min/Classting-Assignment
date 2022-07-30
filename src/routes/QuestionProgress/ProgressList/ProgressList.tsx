import { IProgressListType } from 'types/types';

import styles from './progressList.module.scss';

import useTimeCount from 'hooks/useTimeCount';

const ProgressList = ({ questionCount, title }: IProgressListType) => {
  const { count } = useTimeCount();

  return (
    <div className={styles.progressList}>
      <div className={styles.contentsWrap}>
        <span className={styles.progressTime}>소요 시간 : {count}초</span>
        <span className={styles.progressPage}>
          남은 문제 : <strong>{questionCount + 1}</strong> / 10
        </span>
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ProgressList;
