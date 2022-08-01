import { render, screen } from '@testing-library/react';
import Header from './Header';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<Header />', () => {
  test('component is created normally', () => {
    const container = render(<Header />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(<Header />);

    const button = screen.getByRole('button', {
      name: 'GitHub',
    });
    const desc = screen.getByText('GitHub');

    expect(desc).toBeInTheDocument();
    expect(desc).toHaveTextContent('GitHub');
    expect(button).toBeInTheDocument();
  });
});
