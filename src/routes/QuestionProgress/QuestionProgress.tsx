import { useEffect, useState, useCallback } from 'react';

import ModalPortal from 'components/Modal/ModalPortal';
import QuizModal from 'components/Modal/QuestionModal/QuestionModal';
import Warning, { ErrorMessage } from 'components/Warning/Warning';
import QuestionList from './QuestionList/QuestionList';
import ButtonList from './ButtonList/ButtonList';
import ProgressList from './ProgressList/ProgressList';

import useNavigation from 'hooks/useNavigation';

import { getQuizListApi } from 'services/api';

import { useRecoilState, useRecoilValue } from 'recoil';
import { correctCountState, totalScoreState, incorrectCountState, incorrectNoteState } from 'states/atom';

import { IQuestionItemType } from 'types/types';

import styles from './questionProgress.module.scss';

const QuestionProgress = () => {
  const [isModal, setModal] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isShowCorrect, setShowCorrect] = useState<boolean>(false);

  const [questionValue, setQuestionValue] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [questionList, setQuizList] = useState<IQuestionItemType[]>([]);
  const [incorrectNoteList, setIncorrectNoteList] = useState<IQuestionItemType[]>([]);

  const [correctCount, setCorrectCount] = useRecoilState(correctCountState);
  const [totalScore, setTotalScore] = useRecoilState(totalScoreState);
  const [incorrectNote, setIncorrectNote] = useRecoilState(incorrectNoteState);

  const incorrectCount = useRecoilValue(incorrectCountState);

  const { navigation } = useNavigation();

  const getQuizList = useCallback(async () => {
    setLoading(true);
    setError(false);

    await getQuizListApi({ amount: 10, difficulty: 'easy' })
      .then((res) => res.data)
      .then((data) => {
        setQuizList(data.results);
      })
      .catch(() => setError(true));

    setLoading(false);
  }, []);

  useEffect(() => {
    getQuizList();
  }, [getQuizList]);

  const activeQuestionCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQuestionValue(event.currentTarget.value);
  };

  const openModal = () => {
    setModal((prev) => !prev);
  };

  const goToPage = () => {
    if (limitQuestion) return;

    if (!questionValue) {
      openModal();

      return;
    }

    addCurrentValue();
    setQuestionCount((prev) => prev + 1);
    setQuestionValue('');
    setShowCorrect(false);
  };

  const openCorrect = () => {
    setShowCorrect((prev) => !prev);
  };

  const addTotalScore = () => {
    const totalCorrect = totalScore[0].value + correctCount;
    const totalIncorrect = totalScore[1].value + incorrectCount;

    setTotalScore([
      { category: 'correct', value: totalCorrect },
      { category: 'incorrect', value: totalIncorrect },
    ]);
  };

  const addCurrentValue = () => {
    const checkCorrect = questionValue === questionList[questionCount]?.correct_answer;

    if (checkCorrect) setCorrectCount((prev) => prev + 1);
    if (!checkCorrect) setIncorrectNoteList((prev: IQuestionItemType[]) => [...prev, questionList[questionCount]]);
  };

  const addIncorrectNote = () => {
    const totalInccorrect = [...incorrectNote, ...incorrectNoteList];
    const deduplication = totalInccorrect.filter((existItem, idx) => {
      return (
        totalInccorrect.findIndex((newItem) => {
          return existItem.question === newItem.question;
        }) === idx
      );
    });

    setIncorrectNote(deduplication);
  };

  const goToFinish = () => {
    if (!questionValue) {
      openCorrect();

      return;
    }

    navigation('/questionFinish');
  };

  const isQuestionFinish = () => {
    if (!questionValue) {
      openModal();

      return;
    }

    addCurrentValue();
    addIncorrectNote();
    addTotalScore();
    goToFinish();
  };

  const limitQuestion = questionCount + 1 === questionList.length;

  return (
    <div className={styles.questionProgress}>
      {isLoading && <Warning message={ErrorMessage.Loading} />}
      {isError && <Warning message={ErrorMessage.Error} />}
      {!isLoading && !isError && (
        <div className={styles.contentsWrap}>
          <ProgressList questionCount={questionCount} title={questionList[questionCount]?.question} />
          <QuestionList
            questionValue={questionValue}
            isShowCorrect={isShowCorrect}
            questionList={questionList}
            questionCount={questionCount}
            activeQuestionCard={activeQuestionCard}
          />
          <ButtonList
            limitQuestion={limitQuestion}
            goToPage={goToPage}
            isActive={Boolean(questionValue)}
            isQuestionFinish={isQuestionFinish}
            openCorrect={openCorrect}
          />
        </div>
      )}
      {isModal && (
        <ModalPortal>
          <QuizModal onClose={openModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export default QuestionProgress;
