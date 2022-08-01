import { useEffect, useState } from 'react';

import QuestionCard from 'components/QuestionCard/QuestionCard';

import { IQuestionListType } from 'types/types';

const QuestionList = (props: IQuestionListType) => {
  const [shuffleList, setShuffleList] = useState<string[]>([]);

  const { isShowCorrect, questionValue, questionList, questionCount, activeQuestionCard } = props;

  useEffect(() => {
    const currentQuestion = questionList[questionCount];

    const currentQuestionList = [
      currentQuestion?.correct_answer,
      currentQuestion?.incorrect_answers[0],
      currentQuestion?.incorrect_answers[1],
      currentQuestion?.incorrect_answers[2],
    ];

    currentQuestionList.sort(() => Math.random() - 0.5);

    setShuffleList(currentQuestionList);
  }, [questionList, questionCount]);

  return (
    <div className='questionList'>
      {shuffleList.map((item, idx) => {
        const key = `${item}${idx}`;
        const questionCardValue = shuffleList[idx];
        const checkActive = questionCardValue === questionValue;
        const checkCorrect = isShowCorrect && questionCardValue === questionList[questionCount]?.correct_answer;

        return (
          <QuestionCard
            key={key}
            value={questionCardValue}
            onClick={activeQuestionCard}
            isActive={checkActive}
            isCorrect={checkCorrect}
          >
            {questionCardValue}
          </QuestionCard>
        );
      })}
    </div>
  );
};

export default QuestionList;
