import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const correctCountState = atom({
  key: 'correctCountState',
  default: 0,
});

export const incorrectCountState = selector({
  key: 'incorrectCountState',
  get: ({ get }) => {
    const correctCountValue = get(correctCountState);

    return 10 - correctCountValue;
  },
});

// export const queryLengthState = selector({
//   key: "queryLength",
//   get: ({ get }) => {
//     const length = get(searchQueryState).length;
//     // if (length === 0) return "No Query";
//     return length;
//   }
// });

export const timeCountState = atom({
  key: 'timeCountState',
  default: 0,
});

export const totalScoreState = atom({
  key: 'totalScoreState',
  default: [
    { category: 'correct', value: 0 },
    { category: 'incorrect', value: 0 },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const incorrectNoteState = atom({
  key: 'incorrectNoteState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
