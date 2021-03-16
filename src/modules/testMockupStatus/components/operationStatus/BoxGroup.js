// @flow
// libs
import React, { memo } from 'react';
import LabelStatusV2 from 'commons/components/Label/LabelStatus/LabelStatusV2';

type Props = {
  dataBoxContent: Object,
};

export const BoxGroup = ({ dataBoxContent }: Props) => (
  <div className="box-group">
    <LabelStatusV2
      nameStatus={dataBoxContent?.angleOfIncidence}
      angle="˚"
      title="입사각"
      keyStatus={1}
      color="#97c95e"
    />
    <LabelStatusV2
      nameStatus={dataBoxContent?.azimuth}
      angle="˚"
      title="방위각"
      keyStatus={2}
      color="#ab47bc"
    />
    <LabelStatusV2
      nameStatus={dataBoxContent?.moduleOutput}
      unit="W"
      title="모듈 출력"
      keyStatus={3}
      color="#3b74e7"
    />
    <LabelStatusV2
      nameStatus={dataBoxContent?.moduleColor}
      title="모듈 색상"
      keyStatus={4}
      color="#f55662"
    />
  </div>
);

export default memo<Props>(BoxGroup);
