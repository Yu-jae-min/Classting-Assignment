import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

const descValue = 'description';
const sizeValue = 'normal' as const;
const fnValue = jest.fn();

const ButtonProps = {
  desc: descValue,
  size: sizeValue,
  onClick: fnValue,
  isActive: false,
  disabled: false,
};

describe('<Button />', () => {
  test('component is created normally', () => {
    const container = render(<Button {...ButtonProps} />);

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(<Button {...ButtonProps} />);

    const button = screen.getByRole('button', {
      name: descValue,
    });
    const desc = screen.getByText(descValue);

    expect(desc).toBeInTheDocument();
    expect(desc).toHaveTextContent(descValue);
    expect(button).toBeInTheDocument();
  });

  test('function works correctly', () => {
    render(<Button {...ButtonProps} />);

    const desc = screen.getByText(descValue);

    fireEvent.click(desc);
  });
});
