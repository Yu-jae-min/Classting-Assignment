import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const correctCount = atom({
  key: 'correctCount',
  default: 0,
});

export const incorrectCount = selector({
  key: 'incorrectCount',
  get: ({ get }) => {
    const correctCountValue = get(correctCount);

    return 10 - correctCountValue;
  },
});

export const timeCount = atom({
  key: 'timeCount',
  default: 0,
});

export const totalScore = atom({
  key: 'totalScore',
  default: [
    { category: 'correct', value: 0 },
    { category: 'incorrect', value: 0 },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const incorrectNoteList = atom({
  key: 'incorrectNoteList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
