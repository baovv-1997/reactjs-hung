// @flow
import React from 'react';
import InfoRealityItem from './InfoRealityItem';

type Props = {
  data: any,
};

const InfoReality = ({ data }: Props) => {
  return (
    <div className="info-reality main-card">
      <div className="info-reality__header main-card__header">
        <div className="info-reality__title main-card__title">
          실시간 계측 정보
        </div>
      </div>

      <div className="info-reality__body main-card__body">
        {data.map((item) => (
          <InfoRealityItem
            name={item.name}
            subName={item.subName}
            value={item.value}
            unit={item.unit}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoReality;
