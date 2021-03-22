// @flow
import React from 'react';
import { formatNumber } from 'helpers';

type Props = {
  name?: string,
  subName?: string,
  value?: number,
  unit?: string,
};

const InfoRealityItem = ({
  name = '',
  subName = '',
  value = 0,
  unit = '',
}: Props) => {
  return (
    <div className="info-reality__item">
      <div className="info-reality__group-name">
        <p className="info-reality__name">{name}</p>
        <span className="info-reality__sub-name">{subName}</span>
      </div>
      <div className="info-reality__group-value">
        <p className="info-reality__value">{formatNumber(value)}</p>
        <span className="info-reality__unit">{unit}</span>
      </div>
    </div>
  );
};

InfoRealityItem.defaultProps = {
  name: '',
  subName: '',
  value: 0,
  unit: '',
};

export default InfoRealityItem;
