import cx from 'classnames';
import { IButtonType } from 'types/types';
import styles from './button.module.scss';

const Button = ({ desc, size, onClick, isActive, disabled }: IButtonType) => {
  return (
    <button
      type='button'
      className={cx(styles.button, styles[size], { [styles.isActive]: isActive })}
      onClick={onClick}
      disabled={disabled}
      value={desc}
    >
      {desc}
    </button>
  );
};

export default Button;
