// @flow
// libs
import React, { memo } from 'react';
import LabelStatusV3 from 'commons/components/Label/LabelStatus/LabelStatusV3';

type Props = {
  dataBoxContent: Object,
};

export const BoxGroup = ({ dataBoxContent }: Props) => (
  <div className="box-group">
    <LabelStatusV3
      nameStatus={dataBoxContent?.day}
      unit="kWh"
      title="전일 발전량"
      keyStatus={1}
      color="#3b74e7"
    />
    <LabelStatusV3
      nameStatus={dataBoxContent?.month}
      unit="kWh"
      title="금월 발전량"
      keyStatus={2}
      color="#fe5e6a"
    />
    <LabelStatusV3
      nameStatus={dataBoxContent?.year}
      unit="MWh"
      title="금년 발전량"
      keyStatus={3}
      color="#ffb00d"
    />
  </div>
);

export default memo<Props>(BoxGroup);
