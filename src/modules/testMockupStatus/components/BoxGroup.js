// @flow
// libs
import React, { memo } from 'react';
import { LabelStatus } from 'commons/components/Label/LabelStatus';

type Props = {
  powerData: Object,
  performanceData: Object,
  insolationData: Object,
};

export const BoxGroup = ({
  powerData,
  performanceData,
  insolationData,
}: Props) => (
  <div className="box-group">
    <LabelStatus type={powerData?.type} data={powerData?.data} isPower />
    <LabelStatus
      type={performanceData?.type}
      data={performanceData?.data}
      isTemperature
    />
    <LabelStatus
      type={insolationData?.type}
      data={insolationData?.data}
      isInsolation
    />
  </div>
);

export default memo<Props>(BoxGroup);
