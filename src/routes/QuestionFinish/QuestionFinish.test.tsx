import { render, screen } from '@testing-library/react';
import QuestionFinish from './QuestionFinish';
import { RecoilRoot } from 'recoil';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<QuestionFinish />', () => {
  test('component is created normally', () => {
    const container = render(
      <RecoilRoot>
        <QuestionFinish />
      </RecoilRoot>
    );

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(
      <RecoilRoot>
        <QuestionFinish />
      </RecoilRoot>
    );

    const againButton = screen.getByRole('button', {
      name: '다시 풀기',
    });
    const homeButton = screen.getByRole('button', {
      name: '홈으로',
    });

    const time = screen.getByText('소요 시간');
    const correct = screen.getByText('정답 개수');
    const incorrect = screen.getByText('오답 개수');

    expect(time).toBeInTheDocument();
    expect(correct).toBeInTheDocument();
    expect(incorrect).toBeInTheDocument();

    expect(againButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  });
});
