// @flow
// libs
import React, { useEffect, useRef, memo } from 'react';
import { createChart } from 'lightweight-charts';

type Props = {
  lineSeriesData: Object,
};

const LineSeriesChart = ({ lineSeriesData }: Props) => {
  //   const { height, width } = useWindowDimensions();
  const chartRef = useRef(null);

  useEffect(() => {
    console.log(chartRef, 'chartRef');
    if (chartRef.current) {
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
      lineSeries1.setData(lineSeriesData?.lineSeriesData1);

      const lineSeries2 = chart.addLineSeries({
        color: '#bc5200',
        lineWidth: 2,
      });
      lineSeries2.setData(lineSeriesData?.lineSeriesData2);

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
      lineSeries3.setData(lineSeriesData?.lineSeriesData3);
    }
    console.log(lineSeriesData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineSeriesData]);
  console.log(lineSeriesData, 'ssssssssssss');
  return (
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
  );
};

export default memo<Props>(LineSeriesChart);
