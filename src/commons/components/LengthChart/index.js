// @flow
// libs
import React, { memo } from 'react';

type Props = {
  dataLengthChart: Array<{
    id: number,
    name: string,
    color: string,
  }>,
};

export const LengthChart = ({ dataLengthChart }: Props) => (
  <div className="length-chart">
    {dataLengthChart &&
      dataLengthChart.map((item) => (
        <div className="item" key={item.id}>
          <span style={{ borderColor: item.color }} />
          <div className="name-length">{item?.name}</div>
        </div>
      ))}
  </div>
);

export default memo<Props>(LengthChart);
