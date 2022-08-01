import { render, screen } from '@testing-library/react';
import Warning, { ErrorMessage } from './Warning';

const messageValue = ErrorMessage.Chart;

const WarningProps = {
  message: messageValue,
};

describe('<Button />', () => {
  test('component is created normally', () => {
    const container = render(<Warning {...WarningProps} />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(<Warning {...WarningProps} />);

    const description = screen.getByText(messageValue);

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('통계가 없습니다.');
  });
});
