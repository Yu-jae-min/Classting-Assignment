import Button from 'components/Button/Button';
import styles from './buttonList.module.scss';
import { IButtonListType } from 'types/types';

const ButtonList = (props: IButtonListType) => {
  const { lastQuestion, btnActive, goToNextQuiz, finishQuiz, showCorrectAnswer, giveUpQuiz } = props;

  return (
    <div className={styles.buttonList}>
      {lastQuestion && (
        <Button desc='결과 보기' size='normal' onClick={finishQuiz} isActive={btnActive} disabled={!btnActive} />
      )}
      {!lastQuestion && <Button desc='다음 문항' size='normal' onClick={goToNextQuiz} isActive={btnActive} />}
      <Button desc='답안 보기' size='normal' onClick={showCorrectAnswer} />
      <Button desc='퀴즈 종료' size='normal' onClick={giveUpQuiz} />
    </div>
  );
};

export default ButtonList;
