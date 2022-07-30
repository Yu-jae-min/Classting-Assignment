import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { BAR_STYLE, LINE_STYLE, SCATTER_STYLE, AXIS_STYLE } from './chartStyle';

import Button from 'components/Button/Button';
import Warning, { ErrorMessage } from 'components/Warning/Warning';

import useNavigation from 'hooks/useNavigation';

import { useRecoilValue } from 'recoil';
import { totalScore } from 'states/atom';

import styles from './chart.module.scss';

const Chart = () => {
  const chartData = useRecoilValue(totalScore);

  const { navigation } = useNavigation();

  const correctData = chartData[0].value;
  const incorrectData = chartData[1].value;

  const correct = [{ x: 1, y: correctData }];
  const incorrect = [{ x: 2, y: incorrectData }];

  const tickFormat = ['정답률', '오답률'];
  const message = correctData > incorrectData ? '잘하셨어요!' : '분발하세요!';

  const chartCondition = Boolean(correctData || incorrectData);
  const warningCondition = !correctData && !incorrectData;

  return (
    <div className={styles.chart}>
      {warningCondition && <Warning message={ErrorMessage.Chart} />}
      {chartCondition && (
        <div className={styles.chartWrap}>
          <h1 className={styles.title}>{message}</h1>
          <VictoryChart domainPadding={70}>
            <VictoryAxis tickFormat={tickFormat} style={AXIS_STYLE} />
            <VictoryBar style={BAR_STYLE.correctBar} data={correct} labels={({ datum }) => datum.y} barWidth={45} />
            <VictoryBar style={BAR_STYLE.incorrectBar} data={incorrect} labels={({ datum }) => datum.y} barWidth={45} />
            <VictoryLine style={LINE_STYLE} data={[...correct, ...incorrect]} />
            <VictoryScatter style={SCATTER_STYLE} size={7} data={[...correct, ...incorrect]} />
          </VictoryChart>
        </div>
      )}
      <div className={styles.buttonWrap}>
        <Button desc='홈으로' size='normal' onClick={() => navigation('/')} />
      </div>
    </div>
  );
};

export default Chart;
