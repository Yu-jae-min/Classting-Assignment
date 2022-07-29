import QuestionButton from 'components/Quiz/QuestionButton/QuestionButton';
import styles from './questionList.module.scss';
import { IQuestionListType } from 'types/types';

const QuestionList = (props: IQuestionListType) => {
  const { randomOrder, btnActive, showCorrect, defaultItemList, quizNum, toggleActive } = props;

  return (
    <div className={styles.questionList}>
      {randomOrder.map((item, idx) => {
        const key = `${item}${idx}`;
        const value = randomOrder[idx];
        const active = value === btnActive;
        const correct = showCorrect && value === defaultItemList[quizNum]?.correct_answer;

        return (
          <QuestionButton key={key} value={value} onClick={toggleActive} isActive={active} isCorrect={correct}>
            {value}
          </QuestionButton>
        );
      })}
    </div>
  );
};

export default QuestionList;
