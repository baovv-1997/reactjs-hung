// @flow
import React, { memo } from 'react';
import moment from 'moment';
import {
  Chart,
  Series,
  // CommonAxisSettings,
  ValueAxis,
  Tooltip,
  Crosshair,
  HorizontalLine,
  Label,
  Legend,
  Point,
  ZoomAndPan,
  CommonSeriesSettings,
  ArgumentAxis,
  LoadingIndicator,
  VerticalLine,
} from 'devextreme-react/chart';
import Loading from '../Loading/LoadingSmall';

type Props = {
  dataChart: any,
  optionLine: Object,
  unitLeft: string,
  unitRight: string,
  unitLine1: string,
  unitLine2: string,
  unitLine3: string,
  unitLine4: string,
  unitLine5: string,
};

export const LineChart = ({
  dataChart,
  optionLine,
  unitLeft = 'kWh',
  unitRight = 'W/㎡',
  unitLine1,
  unitLine2,
  unitLine3,
  unitLine4,
  unitLine5,
}: Props) => {
  // const lengthData =
  //   dataChart[dataChart.length] &&
  //   dataChart[dataChart.length].time &&
  //   dataChart[dataChart.length].time - 3600;

  const customizeText = (arg) => {
    const labelText = arg?.valueText.replace(/AM|PM/gi, '') || arg?.valueText;

    return `${labelText}`;
  };

  const date = moment(new Date()).format('YYYY-MM-DD');
  const dateTime = moment(new Date()).format('HH');

  const customizeTooltip = (arg) => {
    let text = `${arg.value.toLocaleString('en', {
      maximumFractionDigits: 2,
    })}${arg.seriesName}`;
    return {
      text: text,
    };
  };

  return (
    <>
      {dataChart && dataChart.length === 0 ? (
        <div className="loading-chart">
          <Loading />
        </div>
      ) : (
        <Chart id="chart" dataSource={dataChart} palette="Harmony Light">
          <LoadingIndicator enabled={true} />
          <CommonSeriesSettings
            endOnTick={false}
            type="spline"
            argumentField="time"
          />

          {optionLine?.line1 && (
            <Series
              valueField="y1"
              type="spline"
              axis="frequency1"
              color="#7c5caf"
              width={4}
              name={unitLine1}
            >
              <Point visible={false} />
            </Series>
          )}
          {optionLine?.line2 && (
            <Series
              valueField="y2"
              type="spline"
              color="#bc5200"
              axis="frequency2"
              width={4}
              name={unitLine2}
            >
              <Point visible={false} />
            </Series>
          )}
          {optionLine?.line3 && (
            <Series
              valueField="y3"
              type="spline"
              color="#ff7913"
              width={4}
              name={unitLine3}
            />
          )}
          <ValueAxis
            title=""
            type="linear"
            pane="top"
            name="frequency1"
            position="left"
            showZero={true}
          />
          {optionLine?.line2 && (
            <ValueAxis
              name="frequency2"
              tickInterval={20}
              showZero={true}
              position="right"
              type="linear"
              pane="top"
              minorTickCount={20}
              valueMarginsEnabled={true}
            />
          )}
          <Crosshair enabled={true} color="#949494" width={3} dashStyle="dot">
            <Label visible={true} backgroundColor="#000000" />
            <VerticalLine visible={true} />
            <HorizontalLine visible={true} />
          </Crosshair>
          <ArgumentAxis
            defaultVisualRange={{
              startValue: `${date} ${dateTime}:00:00`,
              endValue: `${date} ${dateTime}:05:00`,
            }}
            argumentType="datetime"
            aggregationInterval={'second'}
            tickInterval={'second'}
            minorTickInterval={'second'}
          >
            <Label customizeText={customizeText} />
          </ArgumentAxis>
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <Legend visible={false} />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
      )}

      {dataChart && dataChart.length > 0 && (
        <div className="unit-chart">
          {optionLine?.line2 && <div className="unit-left">{unitLeft}</div>}
          {optionLine?.line2 && <div className="unit-right">{unitRight}</div>}
        </div>
      )}
    </>
  );
};
LineChart.defaultProps = {
  unitLeft: 'kWh',
  unitRight: 'W/㎡',
};
export default memo<Props>(LineChart);
