// @flow
import React, { memo, useState, useEffect } from 'react';
import {
  Chart,
  Pane,
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
} from 'devextreme-react/chart';

type Props = {
  dataChart: any,
};

export const LineChart = ({ dataChart }: Props) => {
  const [dataLineChart, setDataLineChart] = useState([dataChart]);
  useEffect(() => {
    setDataLineChart(dataChart);
    // eslint-disable-next-line
  }, [dataChart]);

  const customizeTooltip = (arg) => {
    let text = '';
    switch (arg.seriesName) {
      case 'Series 1':
        text = `${arg.value.toFixed(2)}kWh`;
        break;
      case 'Series 2':
        text = `${arg.value.toFixed(2)}%`;
        break;
      case 'Series 3':
        text = `${arg.value.toFixed(2)}W/㎡`;
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
      {dataChart && dataChart.length > 0 && (
        <Chart id="chart" dataSource={dataLineChart} palette="Harmony Light">
          <CommonSeriesSettings
            endOnTick={false}
            type="spline"
            argumentField="time"
          />
          <Pane name="top" />
          <Series
            pane="top"
            valueField="y1"
            type="spline"
            axis="frequency1"
            color="#7c5caf"
            width={4}
          >
            <Point visible={false} />
          </Series>
          <Series
            pane="top"
            valueField="y2"
            type="spline"
            color="#bc5200"
            width={4}
          >
            <Point visible={false} />
          </Series>
          <ValueAxis
            title=""
            type="linear"
            pane="top"
            name="frequency1"
            position="left"
          />
          <Series
            pane="top"
            valueField="y3"
            type="spline"
            axis="frequency2"
            color="#ff7913"
            width={4}
          />
          <ValueAxis
            name="frequency2"
            tickInterval={20}
            showZero={false}
            position="right"
            type="linear"
            pane="top"
            minorTickCount={20}
            valueMarginsEnabled={false}
          />
          <Crosshair enabled={true} color="#949494" width={3} dashStyle="dot">
            <Label visible={true} backgroundColor="#949494"></Label>
            <HorizontalLine visible={true} />
          </Crosshair>
          <ArgumentAxis
            defaultVisualRange={{
              startValue:
                dataLineChart[dataLineChart.length] &&
                dataLineChart[dataLineChart.length].time &&
                dataLineChart[dataLineChart.length].time - 3600,
              endValue:
                dataLineChart[dataLineChart.length] &&
                dataLineChart[dataLineChart.length].time &&
                dataLineChart[dataLineChart.length].time,
              length: { seconds: 3600 },
            }}
            argumentType="datetime"
          />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <Legend visible={false} />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
      )}
    </>
  );
};

export default memo<Props>(LineChart);
