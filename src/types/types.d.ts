import { ErrorMessage } from 'components/Warning/Warning';

export interface IGetQuizListApiType {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface IQuestionItemType {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface IQuestionListType {
  questionValue: string;
  isShowCorrect: boolean;
  questionList: IQuestionItemType[];
  questionCount: number;
  activeQuestionCard: MouseEventHandler;
}

export interface IProgressListType {
  questionCount: number;
  title: string;
}

export interface IQuestionBtnType {
  uniqueKey?: string;
  className?: string;
  isActive?: boolean;
  isCorrect?: boolean;
  value?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  children?: ReactNode;
}

export interface IQuestionModalType {
  onClose: MouseEventHandler;
}

export interface IModalPortalType {
  children: ReactNode;
}

export interface IButtonType {
  desc: string;
  size: 'large' | 'normal' | 'small';
  onClick?: MouseEventHandler | FormEventHandler;
  isActive?: boolean;
  disabled?: boolean;
}

export interface IWarningType {
  message: ErrorMessage;
}

export interface IButtonListType {
  limitQuestion: boolean;
  isActive: boolean;
  goToPage: MouseEventHandler;
  isQuestionFinish: MouseEventHandler;
  openCorrect: MouseEventHandler;
}
