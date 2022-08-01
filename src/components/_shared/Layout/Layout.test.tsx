import { render } from '@testing-library/react';
import Layout from './Layout';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<Layout />', () => {
  test('component is created normally', () => {
    const container = render(<Layout />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    const { container } = render(<Layout />);

    const main = container.querySelector('main');

    expect(main).toBeInTheDocument();
  });
});
