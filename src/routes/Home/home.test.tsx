import { render, screen } from '@testing-library/react';
import Home from './Home';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<Home />', () => {
  test('component is created normally', () => {
    const container = render(<Home />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(<Home />);

    const titleDescription = /간단한 퀴즈 풀기 게임입니다./i;
    const playName = '퀴즈 풀기';
    const incorrectName = '오답 노트';
    const chartName = '차트 보기';

    const title = screen.getByText(titleDescription);
    const playButton = screen.getByRole('button', {
      name: playName,
    });
    const incorrectButton = screen.getByRole('button', {
      name: incorrectName,
    });
    const chartButton = screen.getByRole('button', {
      name: chartName,
    });

    expect(title).toBeInTheDocument();

    expect(playButton).toHaveTextContent(playName);
    expect(incorrectButton).toHaveTextContent(incorrectName);
    expect(chartButton).toHaveTextContent(chartName);

    expect(playButton).toBeInTheDocument();
    expect(incorrectButton).toBeInTheDocument();
    expect(chartButton).toBeInTheDocument();
  });
});
