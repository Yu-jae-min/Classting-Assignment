import { render } from '@testing-library/react';
import QuestionList from './QuestionList';

const fnValue = jest.fn();

const questionListProps = {
  category: 'category',
  correct_answer: 'correct_answer',
  difficulty: 'easy',
  incorrect_answers: ['incorrect_answers', 'incorrect_answers', 'incorrect_answers'],
  question: 'question',
  type: 'type',
};

const progressListProps = {
  questionValue: 'correct_answer',
  isShowCorrect: false,
  questionList: [questionListProps],
  questionCount: 1,
  activeQuestionCard: fnValue,
};

describe('<QuestionList />', () => {
  test('component is created normally', () => {
    const container = render(<QuestionList {...progressListProps} />);

    expect(container).not.toBe(null);
  });
});
