import { useRef, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { timeCountState } from 'states/atom';

const useTimeCount = () => {
  const [count, setCount] = useRecoilState(timeCountState);

  const ref = useRef(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((ref.current += 1));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [setCount]);

  return { count };
};

export default useTimeCount;
