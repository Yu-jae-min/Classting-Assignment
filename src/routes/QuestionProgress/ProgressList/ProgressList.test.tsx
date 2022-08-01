import { render, screen, renderHook } from '@testing-library/react';
import ProgressList from './ProgressList';
import useTimeCount from 'hooks/useTimeCount';
import { RecoilRoot } from 'recoil';

const progressListProps = {
  title: 'title',
  questionCount: 0,
};

describe('<ProgressList />', () => {
  test('component is created normally', () => {
    const container = render(
      <RecoilRoot>
        <ProgressList {...progressListProps} />
      </RecoilRoot>
    );

    expect(container).not.toBe(null);
  });

  test('shows the props correctly', () => {
    render(
      <RecoilRoot>
        <ProgressList {...progressListProps} />
      </RecoilRoot>
    );

    const { result } = renderHook(() => useTimeCount(), { wrapper: RecoilRoot });

    const questionCountDescription = /남은 문제 :/i;
    const time = screen.getByText(`소요 시간 : ${result.current.count}초`);
    const questionCount = screen.getByText(questionCountDescription);
    const title = screen.getByText(progressListProps.title);

    expect(time).toBeInTheDocument();
    expect(questionCount).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
