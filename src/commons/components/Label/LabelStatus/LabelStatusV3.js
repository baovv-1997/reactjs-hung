// @flow
import React, { memo } from 'react';
import images from 'themes/images';

type Props = {
  unit?: any,
  nameStatus: string,
  title: string,
  keyStatus: number,
  color: string,
};

export const LabelStatusV2 = ({
  unit = '',
  nameStatus,
  title,
  color,
  keyStatus,
}: Props) => {
  const CONTRACT_TYPE = {
    1: images.icon_day_large,
    2: images.icon_month_large,
    3: images.icon_year_large,
    4: images.icon_plus_large,
  };
  return (
    <div
      className="label-status-v2 style3 p-0"
      style={{ backgroundColor: `#ffffff`, border: 'solid 1px #bbbbbb' }}
    >
      <div className="wrap-icon" style={{ backgroundColor: color }}>
        <img
          src={CONTRACT_TYPE[keyStatus]}
          alt="Icon"
          className="status__icon"
        />
      </div>
      <div className="label-status__body">
        <div className="label-status__content">
          <p className="label-status__title" style={{ color: '#000000' }}>
            {title}
          </p>
          <div className="label-status__group-value">
            <p
              className="label-status__value align-items-baseline"
              style={{ color: color }}
            >
              {nameStatus}
              <span style={{ color: color }}>{unit}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

LabelStatusV2.defaultProps = {
  unit: '',
};

export default memo<Props>(LabelStatusV2);
