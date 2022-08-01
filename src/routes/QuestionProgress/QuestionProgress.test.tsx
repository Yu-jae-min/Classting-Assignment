import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import QuestionProgress from './QuestionProgress';
import { ErrorMessage } from 'components/Warning/Warning';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<QuestionProgress />', () => {
  test('component is created normally', () => {
    const container = render(
      <RecoilRoot>
        <QuestionProgress />
      </RecoilRoot>
    );

    expect(container).not.toBe(null);
  });

  test('component is created normally', () => {
    render(
      <RecoilRoot>
        <QuestionProgress />
      </RecoilRoot>
    );

    const messageValue = ErrorMessage.Loading;
    const loading = screen.getByText(messageValue);

    expect(loading).toBeInTheDocument();
  });
});
