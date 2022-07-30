import { IQuestionTitleType } from 'types/types';

import styles from './questionTitle.module.scss';

const QuestionTitle = ({ title }: IQuestionTitleType) => {
  return <p className={styles.title}>{title}</p>;
};

export default QuestionTitle;
