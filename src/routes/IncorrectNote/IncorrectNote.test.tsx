import { render, screen } from '@testing-library/react';
import IncorrectNote from './IncorrectNote';
import { RecoilRoot } from 'recoil';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<IncorrectNote />', () => {
  test('component is created normally', () => {
    const container = render(
      <RecoilRoot>
        <IncorrectNote />
      </RecoilRoot>
    );

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(
      <RecoilRoot>
        <IncorrectNote />
      </RecoilRoot>
    );

    const homeButton = screen.getByRole('button', {
      name: '홈으로',
    });

    expect(homeButton).toBeInTheDocument();
  });
});
