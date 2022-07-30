import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { BAR_STYLE, LINE_STYLE, SCATTER_STYLE, AXIS_STYLE } from './compareChartStyle';

import Button from 'components/Button/Button';
import Warning, { ErrorMessage } from 'components/Warning/Warning';

import useNavigation from 'hooks/useNavigation';

import { useRecoilValue } from 'recoil';
import { totalScoreState } from 'states/atom';

import styles from './compareChart.module.scss';

const CompareChart = () => {
  const totalScore = useRecoilValue(totalScoreState);

  const { navigation } = useNavigation();

  const correctValue = totalScore[0].value;
  const incorrectValue = totalScore[1].value;

  const chartDataCorrect = [{ x: 1, y: correctValue }];
  const chartDataIncorrect = [{ x: 2, y: incorrectValue }];

  const title = correctValue > incorrectValue ? '잘하셨어요!' : '분발하세요!';
  const tickFormat = ['정답률', '오답률'];

  const chartCondition = Boolean(correctValue || incorrectValue);
  const warningCondition = !correctValue && !incorrectValue;

  return (
    <div className={styles.compareChart}>
      {warningCondition && <Warning message={ErrorMessage.Chart} />}
      {chartCondition && (
        <div className={styles.contentsWrap}>
          <h1 className={styles.title}>{title}</h1>
          <VictoryChart domainPadding={70}>
            <VictoryAxis tickFormat={tickFormat} style={AXIS_STYLE} />
            <VictoryBar
              style={BAR_STYLE.correctBar}
              data={chartDataCorrect}
              labels={({ datum }) => datum.y}
              barWidth={45}
            />
            <VictoryBar
              style={BAR_STYLE.incorrectBar}
              data={chartDataIncorrect}
              labels={({ datum }) => datum.y}
              barWidth={45}
            />
            <VictoryLine style={LINE_STYLE} data={[...chartDataCorrect, ...chartDataIncorrect]} />
            <VictoryScatter style={SCATTER_STYLE} size={7} data={[...chartDataCorrect, ...chartDataIncorrect]} />
          </VictoryChart>
        </div>
      )}
      <div className={styles.buttonWrap}>
        <Button desc='홈으로' size='normal' onClick={() => navigation('/')} />
      </div>
    </div>
  );
};

export default CompareChart;
