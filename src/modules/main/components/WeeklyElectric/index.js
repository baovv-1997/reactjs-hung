import React from 'react';
import {
  Chart,
  Series,
  ValueAxis,
  Label,
  Legend,
  ArgumentAxis,
  Aggregation,
} from 'devextreme-react/chart';
type Props = {
  measure?: [],
};

const WeeklyElectric = (measure: Props) => {
  const dataChart = measure?.measure;

  return (
    <div className="weekly-electric main-card">
      <div className="weekly-electric__header main-card__header">
        <div className="weekly-electric__title main-card__title">
          주간 발전 현황
        </div>
        <div className="weekly-electric__unit main-card__unit">kWh</div>
      </div>

      <div className="weekly-electric__body main-card__body">
        <Chart id="chart" dataSource={dataChart}>
          <Series argumentField="time">
            <Aggregation
              enabled={true}
              // calculate={calculateRangeArea}
              method="custom"
            />
          </Series>
          <Legend visible={false} />
        </Chart>
      </div>
    </div>
  );
};

export default WeeklyElectric;
