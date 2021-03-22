// @flow
import React, { memo } from 'react';
import { formatNumber } from 'helpers';

type Props = {
  radiance?: number,
  temperature?: number,
};

const VitualData = ({ radiance = 0, temperature = 0 }: Props) => {
  return (
    <div className="vitual-data main-card">
      <div className="vitual-data__header main-card__header">
        <div className="vitual-data__title main-card__title">기상데이터</div>
      </div>

      <div className="vitual-data__body main-card__body">
        <div className="vitual-data__item">
          <div className="vitual-data__group-name">
            <p className="vitual-data__name">수평 일사량</p>
            <p className="vitual-data__unit">kWh/㎡·10초</p>
          </div>
          <div className="vitual-data__param">{formatNumber(radiance)}</div>
        </div>

        <div className="vitual-data__item">
          <div className="vitual-data__group-name">
            <p className="vitual-data__name">온도</p>
            <p className="vitual-data__unit">℃</p>
          </div>
          <div className="vitual-data__param">{formatNumber(temperature)}</div>
        </div>
      </div>
    </div>
  );
};

VitualData.defaultProps = {
  radiance: 0,
  temperature: 0,
}

export default memo < Props > (VitualData);
