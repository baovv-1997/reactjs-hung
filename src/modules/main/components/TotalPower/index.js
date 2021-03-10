// @flow
import React from 'react';
import images from 'themes/images';
import TotalPowerItem from './TotalPowerItem';

type Props = {
  data: any,
};

export const TotalPower = ({ data }: Props) => {
  return (
    <div className="total-power main-card">
      <div className="total-power__header main-card__header">
        <div className="total-power__title main-card__title">총 발전 현황</div>
        <div className="total-power__unit main-card__unit">kWh</div>
      </div>

      <div className="total-power__body main-card__body">
        {data &&
          data.map((item) => {
            switch (item.type) {
              case 'day':
                return (
                  <TotalPowerItem
                    icon={images.icon_day}
                    name={item.name}
                    value={item.value}
                    customClass="bg-color-day"
                    key={item.id}
                  />
                );

              case 'month':
                return (
                  <TotalPowerItem
                    icon={images.icon_month}
                    name={item.name}
                    value={item.value}
                    customClass="bg-color-month"
                    key={item.id}
                  />
                );

              case 'year':
                return (
                  <TotalPowerItem
                    icon={images.icon_year}
                    name={item.name}
                    value={item.value}
                    customClass="bg-color-year"
                    key={item.id}
                  />
                );

              case 'plus':
                return (
                  <TotalPowerItem
                    icon={images.icon_plus}
                    name={item.name}
                    value={item.value}
                    customClass="bg-color-plus"
                    key={item.id}
                  />
                );

              default:
                return <TotalPowerItem key={item.id} />;
            }
          })}
      </div>
    </div>
  );
};

export default TotalPower;
