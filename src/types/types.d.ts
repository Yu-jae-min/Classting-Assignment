import { ErrorMessage } from 'components/Warning/Warning';

export interface IGetQuizListApiType {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface IItemType {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface IQuestionListType {
  randomOrder: string[];
  btnActive: string;
  showCorrect: boolean;
  defaultItemList: IItemType[];
  quizNum: number;
  toggleActive: MouseEventHandler;
}

export interface IProgressListType {
  count: number;
  quizNum: number;
  title: string;
}

export interface IQuestionTitleType {
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

export interface IQuizModalType {
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
  lastQuestion: boolean;
  btnActive: boolean;
  goToNextQuiz: MouseEventHandler;
  finishQuiz: MouseEventHandler;
  showCorrectAnswer: MouseEventHandler;
  giveUpQuiz: MouseEventHandler;
}
