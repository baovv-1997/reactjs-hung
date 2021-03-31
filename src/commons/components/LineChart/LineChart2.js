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
  Format,
} from 'devextreme-react/chart';

type Props = {
  dataChart: any,
  optionLine: Object,
  unitLeft?: string,
  unitRight?: string,

  unitLine1: string,
  unitLine2: string,
  unitLine3: string,
  unitLine4: string,
  unitLine5: string,

  type?: string,
  typeLine?: string,
  widthLine?: number,

  showPoint1?: boolean,
  showPoint2?: boolean,
  showPoint3?: boolean,
  showPoint4?: boolean,
  showPoint5?: boolean,

  showLabel1?: boolean,
  showLabel2?: boolean,
  showLabel3?: boolean,
  showLabel4?: boolean,
  showLabel5?: boolean,
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

  typeLine = 'spline',
  widthLine = 3,

  showPoint1 = false,
  showPoint2 = false,
  showPoint3 = false,
  showPoint4 = false,
  showPoint5 = false,

  type = 'second',

  showLabel1 = false,
  showLabel2 = false,
  showLabel3 = false,
  showLabel4 = false,
  showLabel5 = false,
}: Props) => {
  /**
  days?: any;
  hours?: any;
  milliseconds?: any;
  minutes?: any;
  months?: any;
  quarters?: any;
  seconds?: any;
  weeks?: any;
  years?: any;
  */
  const customizeText = (arg) => {
    const labelText = arg?.valueText.replace(/AM|PM/gi, '') || arg?.valueText;

    return `${labelText}`;
  };

  const date = moment(new Date()).format('YYYY-MM-DD');
  const dateTime = moment(new Date()).format('HH');

  const customizeTooltip = (arg) => {
    const text = `${arg.value.toLocaleString('en', {
      maximumFractionDigits: 2,
    })}${arg.seriesName}`;
    return {
      text,
    };
  };

  return (
    <>
      <Chart id="chart" dataSource={dataChart} palette="Harmony Light">
        <LoadingIndicator enabled />
        <CommonSeriesSettings
          endOnTick={false}
          type={typeLine}
          argumentField="time"
        />

        {optionLine?.line1 && (
          <Series
            valueField="y1"
            type={typeLine}
            axis="frequency1"
            color="#7c5caf"
            width={widthLine}
            name={unitLine1}
          >
            <Point visible={showPoint1} size={10} />
            <Label visible={showLabel1}>
              <Format type="fixedPoint" precision={0} />
            </Label>
          </Series>
        )}
        {optionLine?.line2 && (
          <Series
            valueField="y2"
            type={typeLine}
            color="#bc5200"
            axis="frequency2"
            width={widthLine}
            name={unitLine2}
          >
            <Point visible={showPoint2} size={10} />
            <Label visible={showLabel2}>
              <Format type="fixedPoint" precision={0} />
            </Label>
          </Series>
        )}
        {optionLine?.line3 && (
          <Series
            valueField="y3"
            type={typeLine}
            color="#ff7913"
            width={widthLine}
            name={unitLine3}
          >
            <Point visible={showPoint3} size={10} />
            <Label visible={showLabel3}>
              <Format type="fixedPoint" precision={0} />
            </Label>
          </Series>
        )}
        <ValueAxis
          title=""
          type="linear"
          pane="top"
          name="frequency1"
          position="left"
          showZero
        />
        {optionLine?.line2 && (
          <ValueAxis
            name="frequency2"
            tickInterval={20}
            showZero
            position="right"
            type="linear"
            pane="top"
            minorTickCount={20}
            autoBreaksEnabled
            defaultVisualRange={{ startValue: 0, endValue: 100 }}
          />
        )}
        <Crosshair enabled color="#949494" width={3} dashStyle="dot">
          <Label visible backgroundColor="#000000" />
          <VerticalLine visible />
          <HorizontalLine visible />
        </Crosshair>
        <ArgumentAxis
          defaultVisualRange={
            type === 'second'
              ? {
                  startValue: `${date} ${dateTime}:00:00`,
                  endValue: `${date} ${dateTime}:05:00`,
                }
              : null
          }
          argumentType="datetime"
          aggregationInterval={type}
          tickInterval={type}
          minorTickInterval={type}
        >
          <Label customizeText={customizeText} />
        </ArgumentAxis>
        <Tooltip enabled customizeTooltip={customizeTooltip} />
        <Legend visible={false} />
        <ZoomAndPan argumentAxis="both" />
      </Chart>

      {dataChart && (
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
  typeLine: 'spline',
  widthLine: 3,
  showPoint1: false,
  showPoint2: false,
  showPoint3: false,
  showPoint4: false,
  showPoint5: false,
  showLabel1: false,
  showLabel2: false,
  showLabel3: false,
  showLabel4: false,
  showLabel5: false,
  type: 'second',
};
export default memo<Props>(LineChart);
