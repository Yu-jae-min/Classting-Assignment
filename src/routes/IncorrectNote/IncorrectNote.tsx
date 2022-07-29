import QuestionButton from 'components/Quiz/QuestionButton/QuestionButton';

import { useRecoilValue } from 'recoil';
import { incorrectNoteList } from 'states/atom';

import QuestionTitle from 'components/Quiz/QuestionTitle/QuestionTitle';

import Warning, { ErrorMessage } from 'components/Warning/Warning';

import styles from './incorrectNote.module.scss';
import { IItemType } from 'types/types';

import Button from 'components/Button/Button';

import useMovePage from 'hooks/useMovePage';

const IncorrectNote = () => {
  const incorrectItem = useRecoilValue(incorrectNoteList);

  const { moveThePage } = useMovePage();

  return (
    <div className={styles.incorrectNote}>
      <div className={styles.contentWrap}>
        {!incorrectItem.length && <Warning message={ErrorMessage.IncorrectNote} />}
        {incorrectItem &&
          incorrectItem.map((item: IItemType, idx: number) => {
            const key = `${item}${idx}`;
            const { question, correct_answer: correct, incorrect_answers: incorrect } = item;

            return (
              <div className={styles.itemList} key={key}>
                <QuestionTitle title={question} />
                <QuestionButton disabled>{correct}</QuestionButton>
                <QuestionButton disabled>{incorrect[0]}</QuestionButton>
                <QuestionButton disabled>{incorrect[1]}</QuestionButton>
                <QuestionButton disabled>{incorrect[2]}</QuestionButton>
              </div>
            );
          })}
      </div>
      <div className={styles.buttonWrap}>
        <Button desc='홈으로' size='normal' onClick={() => moveThePage('/')} />
      </div>
    </div>
  );
};

export default IncorrectNote;
