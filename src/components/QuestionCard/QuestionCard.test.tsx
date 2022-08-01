import { render } from '@testing-library/react';
import QuestionCard from './QuestionCard';

const fnValue = jest.fn();
const element = <div data-testid='card-children'>children</div>;

const QuestionCardProps = {
  uniqueKey: 'uniqueKey',
  className: 'className',
  isActive: false,
  isCorrect: false,
  value: 'value',
  onClick: fnValue,
  disabled: false,
  children: element,
};

describe('<QuestionCard />', () => {
  test('component is created normally', () => {
    const container = render(<QuestionCard {...QuestionCardProps} />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    const { getByTestId } = render(<QuestionCard {...QuestionCardProps}>{element}</QuestionCard>);

    expect(element).not.toBe(null);
    expect(getByTestId('card-children')).toBeDefined();
  });
});
