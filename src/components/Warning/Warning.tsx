import { IWarningType } from 'types/types';

import styles from './warning.module.scss';

export enum ErrorMessage {
  Loading = `로딩 중.. 잠시만 기다려주세요!`,
  Error = '에러 발생! 문제를 가져올 수 없습니다.',
  IncorrectNote = '목록이 비어있습니다.',
  Chart = '통계가 없습니다.',
}

const Warning = ({ message }: IWarningType) => {
  return (
    <div className={styles.warning}>
      <h1 className={styles.title}>{message}</h1>
    </div>
  );
};

export default Warning;
