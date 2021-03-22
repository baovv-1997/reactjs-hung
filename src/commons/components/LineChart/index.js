import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
// import {
//   lineSeriesData1,
//   lineSeriesData2,
//   lineSeriesData3,
// } from 'mockData/chart';

type Props = {
  lineSeriesData1: Array<{}>,
  lineSeriesData2: Array<{}>,
  lineSeriesData3: Array<{}>,
};

const LineSeriesChart = ({
  lineSeriesData1,
  lineSeriesData2,
  lineSeriesData3,
}: Props) => {
  //   const { height, width } = useWindowDimensions();
  const chartRef = useRef(null);

  useEffect(() => {
    if (
      chartRef.current &&
      lineSeriesData1 &&
      lineSeriesData1.length > 0 &&
      lineSeriesData2 &&
      lineSeriesData2.length > 0 &&
      lineSeriesData3 &&
      lineSeriesData3.length > 0
    ) {
      const chart = createChart('lineSeriesChart', {
        width: 800,
        height: 450,

        localization: {
          locale: 'ko-KR',
        },
        leftPriceScale: {
          visible: true,
          borderColor: 'rgba(197, 203, 206, 1)',
        },
      });
      const lineSeries1 = chart.addLineSeries({
        color: '#8567b4',
        lineWidth: 2,
        priceScaleId: 'left',
      });
      lineSeries1.setData(lineSeriesData1);

      const lineSeries2 = chart.addLineSeries({
        color: '#bc5200',
        lineWidth: 2,
      });
      lineSeries2.setData(lineSeriesData2);

      const lineSeries3 = chart.addLineSeries({
        color: '#ff7913',
        lineWidth: 2,
        leftPriceScale: {
          visible: false,
        },
        rightPriceScale: {
          visible: false,
        },
      });
      lineSeries3.setData(lineSeriesData3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineSeriesData1, lineSeriesData2, lineSeriesData3]);

  return (
    <>
      <div
        id="lineSeriesChart"
        className="lineSeriesChart"
        style={{
          width: '100%',
          height: 'auto',
          display: 'inline',
          justifyContent: 'center',
        }}
        ref={chartRef}
      />
    </>
  );
};

export default LineSeriesChart;
