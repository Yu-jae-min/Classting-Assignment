import { render, screen } from '@testing-library/react';
import QuestionModal from './QuestionModal';

const fnValue = jest.fn();

const QuestionModalProps = {
  onClose: fnValue,
};

describe('<Home />', () => {
  test('component is created normally', () => {
    const container = render(<QuestionModal {...QuestionModalProps} />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(<QuestionModal {...QuestionModalProps} />);

    const warningText = screen.getByText('경고 !');
    const warningDescText = screen.getByText('보기 중 하나의 답을 선택해주세요.');
    const closeButton = screen.getByRole('button', {
      name: '닫기',
    });

    expect(warningText).toBeInTheDocument();
    expect(warningDescText).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
});
