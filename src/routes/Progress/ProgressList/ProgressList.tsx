import QuestionTitle from 'components/Quiz/QuestionTitle/QuestionTitle';
import { IProgressListType } from 'types/types';
import styles from './progressList.module.scss';

const ProgressList = ({ count, quizNum, title }: IProgressListType) => {
  return (
    <div className={styles.progressList}>
      <div className={styles.progressRate}>
        <span className={styles.progressTime}>소요 시간 : {count}초</span>
        <span className={styles.progressPage}>
          남은 문제 : <strong>{quizNum + 1}</strong> / 10
        </span>
      </div>
      <QuestionTitle title={title} />
    </div>
  );
};

export default ProgressList;
