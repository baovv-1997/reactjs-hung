// @flow
import React, { memo } from 'react';
import InfoRealityItem from './InfoRealityItem';

type Props = {
  outputVoltage?: number,
  outputCurrent?: number,
  electricRealtime?: number,
  ratePower?: number,
};

const InfoReality = ({ outputVoltage = 0, outputCurrent = 0, electricRealtime = 0, ratePower = 0 }: Props) => {
  return (
    <div className="info-reality main-card">
      <div className="info-reality__header main-card__header">
        <div className="info-reality__title main-card__title">
          실시간 계측 정보
        </div>
      </div>

      <div className="info-reality__body main-card__body">
        <InfoRealityItem
          name='출력전압'
          subName='v2'
          value={outputVoltage}
          unit='V'
        />
        <InfoRealityItem
          name='출력전류'
          subName='l2'
          value={outputCurrent}
          unit='A'
        />
        <InfoRealityItem
          name='전체 실시간 발전량'
          subName='p'
          value={electricRealtime}
          unit='V'
        />
        <InfoRealityItem
          name='전체 모듈 성능비'
          subName=''
          value={ratePower}
          unit='%'
        />
      </div>
    </div>
  );
};

InfoReality.defaultProps = {
  outputVoltage: 0,
  outputCurrent: 0,
  electricRealtime: 0,
  ratePower: 0,
}

export default memo < Props > (InfoReality);
