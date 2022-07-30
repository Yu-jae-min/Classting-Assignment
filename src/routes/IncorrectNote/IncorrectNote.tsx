import cx from 'classnames';

import Button from 'components/Button/Button';
import QuestionButton from 'components/QuestionCard/QuestionCard';
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
                  <QuestionButton disabled>{correct}</QuestionButton>
                  <QuestionButton disabled>{incorrect[0]}</QuestionButton>
                  <QuestionButton disabled>{incorrect[1]}</QuestionButton>
                  <QuestionButton disabled>{incorrect[2]}</QuestionButton>
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
