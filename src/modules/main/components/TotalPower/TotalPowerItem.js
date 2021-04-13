// @flow
import React, { memo } from 'react';
import { formatNumber } from 'helpers';

type Props = {
  icon?: any,
  name?: string,
  value?: number,
  customClass?: string,
  unit?: string,
};

const TotalPowerItem = ({
  icon = '',
  name = '',
  value = 0,
  customClass = '',
  unit = 'kWh',
}: Props) => {
  return (
    <div className={`total-power__item ${customClass}`}>
      <img src={icon} alt="" className="total-power__icon" />
      <p className="total-power__item-name">{name}</p>
      <p className="total-power__item-value">{formatNumber(value)}</p>
      <p className="total-power__item-unit">{unit}</p>
    </div>
  );
};

TotalPowerItem.defaultProps = {
  name: '',
  value: 0,
  customClass: '',
  icon: '',
  unit: 'kWh',
};

export default memo<Props>(TotalPowerItem);
