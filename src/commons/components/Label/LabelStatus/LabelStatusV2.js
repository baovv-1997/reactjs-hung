// @flow
import React, { memo } from 'react';
import images from 'themes/images';

type Props = {
  unit?: any,
  nameStatus: string,
  title: string,
  keyStatus: number,
  angle?: string,
  color: string,
};

export const LabelStatusV2 = ({
  unit = '',
  nameStatus,
  title,
  color,
  keyStatus,
  angle,
}: Props) => {
  const CONTRACT_TYPE = {
    1: images.angle1,
    2: images.angle2,
    3: images.angle3,
    4: images.angle4,
  };
  return (
    <div className="label-status-v2" style={{ backgroundColor: `${color}` }}>
      <img src={CONTRACT_TYPE[keyStatus]} alt="Icon" className="status__icon" />
      <div className="label-status__body">
        <div className="label-status__content">
          <p className="label-status__title">{title}</p>
          <div className="label-status__group-value">
            <p className="label-status__value">
              {nameStatus}
              <i>{angle}</i>
              <span>{unit}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

LabelStatusV2.defaultProps = {
  unit: '',
  angle: '',
};

export default memo<Props>(LabelStatusV2);
