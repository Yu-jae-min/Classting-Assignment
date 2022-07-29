import cx from 'classnames';
import { IQuestionBtnType } from 'types/types';
import styles from './questionButton.module.scss';

const QuestionButton = (props: IQuestionBtnType) => {
  const { uniqueKey, className, isActive, isCorrect, value, onClick, disabled, children } = props;

  return (
    <button
      key={uniqueKey}
      type='button'
      className={cx(styles.btn, className, { [styles.isActive]: isActive, [styles.isCorrect]: isCorrect })}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default QuestionButton;
