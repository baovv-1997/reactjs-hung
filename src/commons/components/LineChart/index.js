/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import moment from 'moment';
// import {
//   lineSeriesData1,
//   lineSeriesData2,
//   lineSeriesData3,
// } from 'mockData/chart';

type Props = {
  width: number,
  height: Number,
  dataChart: Array<>,
  // lineSeriesData1: Array<{}>,
  // lineSeriesData2: Array<{}>,
  // lineSeriesData3: Array<{}>,
};

const LineSeriesChart = ({ dataChart, width, height }: Props) => {
  //   const { height, width } = useWindowDimensions();
  const chartRef = useRef(null);

  const [chart, setChart] = useState(null);
  useEffect(() => {
    if (chartRef.current) {
      const chart1 = createChart('lineSeriesChart', {
        width,
        height,

        localization: {
          locale: 'ko-KR',
        },
        leftPriceScale: {
          visible: true,
          borderColor: 'rgba(197, 203, 206, 1)',
        },
      });
      setChart(chart1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chart) {
      const lineSeries1 = chart.addLineSeries({
        color: '#8567b4',
        lineWidth: 2,
        priceScaleId: 'left',
      });

      lineSeries1.setData(
        (dataChart &&
          dataChart[0] &&
          dataChart[0].map((item) => ({
            time: moment(item.time).format('YYYY-MM-DD'),
            value: item.value,
          }))) ||
          []
      );

      const lineSeries2 = chart.addLineSeries({
        color: '#bc5200',
        lineWidth: 2,
      });
      lineSeries2.setData(
        (dataChart &&
          dataChart[1] &&
          dataChart[1].map((item) => ({
            time: moment(item.time).format('YYYY-MM-DD'),
            value: item.value,
          }))) ||
          []
      );

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
      lineSeries3.setData(
        (dataChart &&
          dataChart[2] &&
          dataChart[2].map((item) => ({
            time: moment(item.time).format('YYYY-MM-DD'),
            value: item.value,
          }))) ||
          []
      );
    }
  }, [dataChart]);

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
