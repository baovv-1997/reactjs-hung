// @flow
import React, { memo } from 'react';
import images from 'themes/images';
import TotalPowerItem from './TotalPowerItem';

type Props = {
  amountElectricDay?: number,
  amountElectricMonth?: number,
  cumulativeElectric?: number,
};

export const TotalPower = ({
  amountElectricDay = 0,
  amountElectricMonth = 0,
  cumulativeElectric = 0,
}: Props) => {
  return (
    <div className="total-power main-card">
      <div className="total-power__header main-card__header">
        <div className="total-power__title main-card__title">총 발전 현황</div>
      </div>

      <div className="total-power__body ">
        <TotalPowerItem
          icon={images.icon_day}
          name="금일 발전량"
          value={amountElectricDay}
          customClass="bg-color-day"
          unit="kWh"
        />
        <TotalPowerItem
          icon={images.icon_month}
          name="금월 발전량"
          value={amountElectricMonth}
          customClass="bg-color-month"
          unit="MWh"
        />
        <TotalPowerItem
          icon={images.icon_plus}
          name="누적 발전량"
          value={cumulativeElectric}
          customClass="bg-color-plus"
          unit="MW"
        />
      </div>
    </div>
  );
};

TotalPower.defaultProps = {
  amountElectricDay: 0,
  amountElectricMonth: 0,
  cumulativeElectric: 0,
};

export default memo<Props>(TotalPower);
