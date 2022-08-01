import useNavigation from './useNavigation';
import { renderHook } from '@testing-library/react-hooks';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('useNavigation', () => {
  test('function works correctly', () => {
    const { result } = renderHook(() => useNavigation());

    expect(result.current.navigation).not.toBe(null);
  });
});
