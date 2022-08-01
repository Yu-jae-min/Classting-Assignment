import { renderHook } from '@testing-library/react-hooks';
import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  correctCountState,
  incorrectCountState,
  timeCountState,
  totalScoreState,
  incorrectNoteState,
} from 'states/atom';

describe('correctCountState', () => {
  test('test the correctCountState atom', () => {
    const { result } = renderHook(() => useRecoilValue(correctCountState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual(0);
  });
});

describe('incorrectCountState', () => {
  test('test the incorrectCountState atom', () => {
    const query = 5;

    const { result } = renderHook(
      () => {
        const setSearchQuery = useSetRecoilState(correctCountState);

        useEffect(() => {
          setSearchQuery(query);
        }, [setSearchQuery]);

        return useRecoilValue(incorrectCountState);
      },
      {
        wrapper: RecoilRoot,
      }
    );

    expect(result.current).toEqual(query);
  });
});

describe('timeCountState', () => {
  test('test the timeCountState atom', () => {
    const { result } = renderHook(() => useRecoilValue(timeCountState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual(0);
  });
});

describe('totalScoreState', () => {
  test('test the totalScoreState atom', () => {
    const defalut = [
      { category: 'correct', value: 0 },
      { category: 'incorrect', value: 0 },
    ];

    const { result } = renderHook(() => useRecoilValue(totalScoreState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual(defalut);
  });
});

describe('incorrectNoteState', () => {
  test('test the incorrectNoteState atom', () => {
    const { result } = renderHook(() => useRecoilValue(incorrectNoteState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual([]);
  });
});
