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
};

export const LineChart = ({
  dataChart,
  optionLine,
  unitLeft = 'kWh',
  unitRight = 'W/㎡',
}: Props) => {
  const lengthData =
    dataChart[dataChart.length] &&
    dataChart[dataChart.length].time &&
    dataChart[dataChart.length].time - 3600;

  // const customizeText = (arg) => {
  //   const labelText = arg.valueText.substring(0, arg.valueText.length - 2);
  //   return `${labelText}`;
  // };

  const date = moment(new Date()).format('YYYY-MM-DD');
  const dateTime = moment(new Date()).format('HH');

  const customizeTooltip = (arg) => {
    let text = '';
    switch (arg.seriesName) {
      case 'Series 1':
        text = `${arg.value.toLocaleString('en', {
          maximumFractionDigits: 2,
        })}kWh`;
        break;
      case 'Series 2':
        text = `${arg.value.toLocaleString('en', {
          maximumFractionDigits: 2,
        })}%`;
        break;
      case 'Series 3':
        text = `${arg.value.toLocaleString('en', {
          maximumFractionDigits: 2,
        })}W/㎡`;
        break;
      default:
        text = arg.value;
        break;
    }
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
            >
              <Point visible={false} />
            </Series>
          )}
          {optionLine?.line2 && (
            <Series valueField="y2" type="spline" color="#bc5200" width={4}>
              <Point visible={false} />
            </Series>
          )}
          {optionLine?.line3 && (
            <Series
              valueField="y3"
              type="spline"
              axis="frequency2"
              color="#ff7913"
              width={4}
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
          <Crosshair enabled={true} color="#949494" width={3} dashStyle="dot">
            <Label visible={true} backgroundColor="#000000" />
            <VerticalLine visible={true} />
            <HorizontalLine visible={true} />
          </Crosshair>
          <ArgumentAxis
            defaultVisualRange={{
              startValue: `${date} ${dateTime}:00:00`,
              endValue: `${date} ${dateTime}:59:59`,
            }}
            argumentType="datetime"
          >
            <Label format="S" />
          </ArgumentAxis>
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <Legend visible={false} />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
      )}

      {dataChart && dataChart.length > 0 && (
        <div className="unit-chart">
          <div className="unit-left">{unitLeft}</div>
          <div className="unit-right">{unitRight}</div>
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
