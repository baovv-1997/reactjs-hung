import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import { lineSeriesData1 } from 'mockData/chart';

type Props = {
  measure?: [],
};

const WeeklyElectric = (measure: Props) => {
  const dataChart = measure?.measure?.prod_groupby_week;
  console.log('dataChart', dataChart);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = createChart('lineSeriesChart', {
        width: 200,
        height: 150,
        rightPriceScale: {
          visible: false,
        },
        leftPriceScale: {
          visible: false,
        },
        timeScale: {
          tickMarkFormatter: (time) => {
            const date = new Date(time);
            return date.getDay();
          },
        },
      });
      const lineSeries = chart.addLineSeries({
        color: '#135998',
        lineWidth: 2,
      });

      if (lineSeriesData1) {
        lineSeries.setData([
          { time: 1612674467, value: 80.01 },
          { time: 1616760867, value: 96.63 },
          { time: 1616847267, value: 76.64 },
          { time: 1616933667, value: 81.89 },
          { time: 1617020067, value: 74.43 },
          { time: 1627106467, value: 80.01 },
          { time: 1627192867, value: 96.63 },
        ]);
      }
      chart.timeScale().fitContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="weekly-electric main-card">
      <div className="weekly-electric__header main-card__header">
        <div className="weekly-electric__title main-card__title">
          주간 발전 현황
        </div>
        <div className="weekly-electric__unit main-card__unit">kWh</div>
      </div>

      <div className="weekly-electric__body main-card__body">
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
      </div>
    </div>
  );
};

export default WeeklyElectric;
