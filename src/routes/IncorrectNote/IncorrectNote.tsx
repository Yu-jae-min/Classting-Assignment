import cx from 'classnames';

import Button from 'components/Button/Button';
import QuestionCard from 'components/QuestionCard/QuestionCard';
import Warning, { ErrorMessage } from 'components/Warning/Warning';

import useNavigation from 'hooks/useNavigation';

import { useRecoilValue } from 'recoil';
import { incorrectNoteState } from 'states/atom';

import { IQuestionItemType } from 'types/types';

import styles from './incorrectNote.module.scss';

const IncorrectNote = () => {
  const incorrectNote = useRecoilValue(incorrectNoteState);

  const { navigation } = useNavigation();

  const checkIncorrectNote = incorrectNote.length ? '' : 'empty';

  return (
    <div className={styles.incorrectNote}>
      <div className={cx(styles.container, styles[checkIncorrectNote])}>
        {!incorrectNote.length && (
          <div className={styles.warningWrap}>
            <Warning message={ErrorMessage.IncorrectNote} />
          </div>
        )}
        {incorrectNote && (
          <div className={styles.contentsWrap}>
            {incorrectNote.map((item: IQuestionItemType, idx: number) => {
              const key = `${item}${idx}`;
              const { question, correct_answer: correct, incorrect_answers: incorrect } = item;

              return (
                <div className={styles.itemList} key={key}>
                  <h1 className={styles.title}>{question}</h1>
                  <QuestionCard disabled>{correct}</QuestionCard>
                  <QuestionCard disabled>{incorrect[0]}</QuestionCard>
                  <QuestionCard disabled>{incorrect[1]}</QuestionCard>
                  <QuestionCard disabled>{incorrect[2]}</QuestionCard>
                </div>
              );
            })}
          </div>
        )}
        <div className={styles.buttonWrap}>
          <Button desc='홈으로' size='normal' onClick={() => navigation('/')} />
        </div>
      </div>
    </div>
  );
};

export default IncorrectNote;
