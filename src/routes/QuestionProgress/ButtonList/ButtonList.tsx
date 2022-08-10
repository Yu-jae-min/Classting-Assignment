import Button from 'components/Button/Button';

import useNavigation from 'hooks/useNavigation';

import { useResetRecoilState } from 'recoil';
import { correctCountState, timeCountState } from 'states/atom';

import { IButtonListType } from 'types/types';

import styles from './buttonList.module.scss';

const ButtonList = (props: IButtonListType) => {
  const { limitQuestion, isActive, goToNextQuestion, isQuestionFinish, openCorrect, resetIncorrectNoteList } = props;
  const { navigation } = useNavigation();

  const resetTime = useResetRecoilState(timeCountState);
  const resetCorrect = useResetRecoilState(correctCountState);

  const isQuestionStop = () => {
    resetTime();
    resetCorrect();
    resetIncorrectNoteList();
    navigation('/');
  };

  return (
    <div className={styles.buttonList}>
      {limitQuestion && <Button desc='결과 보기' size='normal' onClick={isQuestionFinish} isActive={isActive} />}
      {!limitQuestion && <Button desc='다음 문항' size='normal' onClick={goToNextQuestion} isActive={isActive} />}
      <Button desc='답안 보기' size='normal' onClick={openCorrect} />
      <Button desc='퀴즈 종료' size='normal' onClick={isQuestionStop} />
    </div>
  );
};

export default ButtonList;
