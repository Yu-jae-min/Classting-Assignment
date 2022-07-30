import { IQuizModalType } from 'types/types';

import styles from './quizmodal.module.scss';

const QuizModal = ({ onClose }: IQuizModalType) => {
  return (
    <div className={styles.quizModal}>
      <div className={styles.content}>
        <h1 className={styles.title}>경고 !</h1>
        <p className={styles.desc}>보기 중 하나의 답을 선택해주세요.</p>
        <button type='button' className={styles.closeBtn} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default QuizModal;
