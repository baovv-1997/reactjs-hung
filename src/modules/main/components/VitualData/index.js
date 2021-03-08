// @flow
import React from 'react';
import Circle from 'react-colorful-circle';

type Props = {
  data: any,
};

const VitualData = ({ data }: Props) => {
  console.log(data, 'data');
  return (
    <div className="vitual-data main-card">
      <div className="vitual-data__header main-card__header">
        <div className="vitual-data__title main-card__title">기상데이터</div>
      </div>

      <div className="vitual-data__body main-card__body">
        {data.map((item) => (
          <div className="vitual-data__item" key={item.id}>
            <div className="vitual-data__group-name">
              <p className="vitual-data__name">{item.name}</p>
              <p className="vitual-data__unit">{item.unit}</p>
            </div>
            {/* <div className="vitual-data__param">{item.value}</div> */}
            <Circle progress={item.value} bgColor="#ecedf0" size="70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitualData;
