import { render, screen } from '@testing-library/react';
import ButtonList from './ButtonList';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const fnValue = jest.fn();

const ButtonListProps = {
  limitQuestion: false,
  isActive: false,
  goToNextQuestion: fnValue,
  isQuestionFinish: fnValue,
  openCorrect: fnValue,
  resetIncorrectNoteList: fnValue,
};

describe('<ButtonList />', () => {
  test('component is created normally', () => {
    const container = render(<ButtonList {...ButtonListProps} />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(<ButtonList {...ButtonListProps} />);

    const nextButton = screen.getByRole('button', {
      name: '다음 문항',
    });
    const correctButton = screen.getByRole('button', {
      name: '답안 보기',
    });
    const giveButton = screen.getByRole('button', {
      name: '퀴즈 종료',
    });

    expect(nextButton).toBeInTheDocument();
    expect(correctButton).toBeInTheDocument();
    expect(giveButton).toBeInTheDocument();
  });
});
