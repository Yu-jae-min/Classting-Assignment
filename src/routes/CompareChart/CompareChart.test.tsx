import { render, screen } from '@testing-library/react';
import CompareChart from './CompareChart';
import { RecoilRoot } from 'recoil';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<CompareChart />', () => {
  test('component is created normally', () => {
    const container = render(
      <RecoilRoot>
        <CompareChart />
      </RecoilRoot>
    );

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(
      <RecoilRoot>
        <CompareChart />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', {
      name: '홈으로',
    });

    expect(button).toBeInTheDocument();
  });
});
