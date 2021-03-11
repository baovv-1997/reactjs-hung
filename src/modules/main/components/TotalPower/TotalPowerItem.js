// @flow
import React, { memo } from 'react';

type Props = {
  icon?: any,
  name?: string,
  value?: number,
  customClass?: string,
};

const TotalPowerItem = ({
  icon = '',
  name = '',
  value = 0,
  customClass = '',
}: Props) => {
  return (
    <div className={`total-power__item ${customClass}`}>
      <div className="total-power__content-header">
        <img src={icon} alt="" className="total-power__icon" />
        <p className="total-power__item-name">{name}</p>
      </div>
      <p className="total-power__item-value">{value}</p>
    </div>
  );
};

TotalPowerItem.defaultProps = {
  name: '',
  value: 0,
  customClass: '',
  icon: '',
};

export default memo<Props>(TotalPowerItem);
