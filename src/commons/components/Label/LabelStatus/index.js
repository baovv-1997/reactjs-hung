// @flow
import React, { memo } from 'react';
import COLOR_LABEL from 'constants/label';
import IMG from 'constants/image';

type Props = {
  data?: any,
  isPower?: boolean,
  isTemperature?: boolean,
  isInsolation?: boolean,
};

export const LabelStatus = ({
  data = [],
  isPower = false,
  isTemperature = false,
  isInsolation = false,
}: Props) => {
  let unit = '';
  let icon;
  let color = '';

  // set icon, unit and color label
  if (isPower) {
    icon = IMG.POWER;
    unit = '';
    color = COLOR_LABEL.POWER;
  }
  if (isTemperature) {
    icon = IMG.TEMPERATURE;
    unit = '단위 : ℃';
    color = COLOR_LABEL.TEMPERATURE;
  }
  if (isInsolation) {
    icon = IMG.INSOLATION;
    unit = '단위 : kWh/㎡·10초';
    color = COLOR_LABEL.INSOLATION;
  }

  return (
    <div className="label-status" style={{ color: `${color}` }}>
      <img src={icon} alt="Icon" className="label-status__icon" />
      <div className="label-status__body">
        {data &&
          data.map((item) => {
            let itemUnit = '';
            if (isPower && item === data[0]) itemUnit = 'kWh';
            else if (isPower && item === data[1]) itemUnit = '%';
            return (
              <div className="label-status__content">
                <p className="label-status__title">{item.title}</p>
                <div className="label-status__group-value">
                  <p className="label-status__value">{item.value}</p>
                  <p className="label-status__unit">{itemUnit}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="label-status__group-unit">{unit}</div>
    </div>
  );
};

LabelStatus.defaultProps = {
  data: [],
  isPower: false,
  isTemperature: false,
  isInsolation: false,
};

export default memo<Props>(LabelStatus);
