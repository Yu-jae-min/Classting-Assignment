import { useEffect, useState, useCallback, useMemo } from 'react';

import ModalPortal from 'components/Modal/ModalPortal';
import QuizModal from 'components/Modal/QuizModal/QuizModal';
import Warning, { ErrorMessage } from 'components/Warning/Warning';
import QuestionList from './QuestionList/QuestionList';
import ButtonList from './ButtonList/ButtonList';
import ProgressList from './ProgressList/ProgressList';

import useTimeCount from 'hooks/useTimeCount';
import useNavigation from 'hooks/useNavigation';

import { getQuizListApi } from 'services/api';

import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { correctCount, timeCount, totalScore, incorrectCount, incorrectNoteList } from 'states/atom';

import { IItemType } from 'types/types';

import styles from './progress.module.scss';

const Progress = () => {
  const [modalOpen, setModalOpen] = useState<boolean>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoad] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<IItemType[]>();
  const [quizNum, setQuizNum] = useState<number>(0);
  const [randomOrder, setRandomOrder] = useState<string[]>([]);
  const [btnActive, setBtnActive] = useState<string>('');
  const [showCorrect, setShowCorrect] = useState<boolean>(false);
  const [currentIncorrectList, setCurrentIncorrectList] = useState<IItemType[]>([]);

  const [countCorrect, setCountCorrect] = useRecoilState(correctCount);
  const [setTotal, setTotalCount] = useRecoilState(totalScore);
  const [incorrectItem, setIncorrectItem] = useRecoilState(incorrectNoteList);
  const currentIncorrect = useRecoilValue(incorrectCount);

  const resetTime = useResetRecoilState(timeCount);
  const resetCorrect = useResetRecoilState(correctCount);

  const { navigation } = useNavigation();
  const { count } = useTimeCount();

  // 버튼 활성화
  const toggleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;

    setBtnActive(button.value);
  };

  // 모달 오픈/종료
  const isOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  // 데이터 가져오기
  const getQuizList = useCallback(async () => {
    setIsLoad(true);
    setIsError(false);

    await getQuizListApi({ amount: 10, difficulty: 'easy' })
      .then((res) => res.data)
      .then((data) => {
        setQuizList(data.results);
      })
      .catch(() => setIsError(true));

    setIsLoad(false);
  }, []);

  useEffect(() => {
    getQuizList();
  }, [getQuizList]);

  const defaultItemList = useMemo(() => {
    return quizList ?? [];
  }, [quizList]);

  const lastQuestion = quizNum + 1 === defaultItemList.length;

  // 다음 페이지
  const goToNextQuiz = () => {
    if (quizNum + 1 === defaultItemList.length) return;

    if (!btnActive) {
      isOpenModal();

      return;
    }

    checkAnswer();
    setQuizNum((prev) => prev + 1);
    setBtnActive('');
    setShowCorrect(false);
  };

  // 랜덤 숫자
  useEffect(() => {
    const numbers = [
      defaultItemList[quizNum]?.correct_answer,
      defaultItemList[quizNum]?.incorrect_answers[0],
      defaultItemList[quizNum]?.incorrect_answers[1],
      defaultItemList[quizNum]?.incorrect_answers[2],
    ];

    numbers.sort(() => Math.random() - 0.5);

    setRandomOrder(numbers);
  }, [defaultItemList, quizNum]);

  // 답안보기
  const showCorrectAnswer = () => {
    setShowCorrect((prev) => !prev);
  };

  // 정답 카운트
  const totalCount = () => {
    const totalCorrect = setTotal[0].value + countCorrect;
    const totalIncorrect = setTotal[1].value + currentIncorrect;

    setTotalCount([
      { category: 'correct', value: totalCorrect },
      { category: 'incorrect', value: totalIncorrect },
    ]);
  };

  const checkAnswer = () => {
    const checkCorrect = btnActive === defaultItemList[quizNum]?.correct_answer;

    if (checkCorrect) setCountCorrect((prev) => prev + 1);
    if (!checkCorrect) setCurrentIncorrectList((prev: IItemType[]) => [...prev, defaultItemList[quizNum]]);
  };

  // 오답 노트 추가
  const addIncorrectNoteItem = () => {
    const total = [...incorrectItem, ...currentIncorrectList];
    const deduplication = total.filter((existItem, i) => {
      return (
        total.findIndex((newItem) => {
          return existItem.question === newItem.question;
        }) === i
      );
    });

    setIncorrectItem(deduplication);
  };

  // 결과보기 버튼 클릭 시 페이지 이동
  const goToCompletion = (value: string) => {
    const checkValue = value === '결과 보기';
    const condition = checkValue && lastQuestion && btnActive;

    if (condition) navigation('/completion');
  };

  // 결과보기 버튼 클릭 시
  const finishQuiz = (event: React.MouseEvent<HTMLButtonElement>) => {
    totalCount();
    checkAnswer();
    addIncorrectNoteItem();
    goToCompletion(event.currentTarget.value);
  };

  // 포기하기
  const giveUpQuiz = () => {
    resetTime();
    resetCorrect();
    navigation('/');
  };

  return (
    <div className={styles.progress}>
      {isLoading && <Warning message={ErrorMessage.Loading} />}
      {isError && <Warning message={ErrorMessage.Error} />}
      {!isLoading && !isError && (
        <div className={styles.contantsWrap}>
          <ProgressList count={count} quizNum={quizNum} title={defaultItemList[quizNum]?.question} />
          <QuestionList
            randomOrder={randomOrder}
            btnActive={btnActive}
            showCorrect={showCorrect}
            defaultItemList={defaultItemList}
            quizNum={quizNum}
            toggleActive={toggleActive}
          />
          <ButtonList
            lastQuestion={lastQuestion}
            btnActive={Boolean(btnActive)}
            goToNextQuiz={goToNextQuiz}
            finishQuiz={finishQuiz}
            showCorrectAnswer={showCorrectAnswer}
            giveUpQuiz={giveUpQuiz}
          />
        </div>
      )}
      {modalOpen && (
        <ModalPortal>
          <QuizModal onClose={isOpenModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export default Progress;
