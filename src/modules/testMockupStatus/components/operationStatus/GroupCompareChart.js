// @flow
// libs
import React, { memo } from 'react';
import CheckBox from 'commons/components/CheckBox';

type Props = {
  paramsSearch: Object,
  handleChangeSearch: Function,
};

export const GroupCompareChart = ({
  paramsSearch,
  handleChangeSearch,
}: Props) => (
  <div className="group-char-checkbox">
    <div className="checkbox-header">차트 비교</div>
    <div className="list-checkbox">
      <CheckBox
        name="ACVoltage"
        isChecked={paramsSearch?.ACVoltage}
        label="AC전압"
        id="ACVoltage"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.ACVoltage, 'ACVoltage')
        }
      />
      <CheckBox
        name="ACCurrent"
        id="ACCurrent"
        isChecked={paramsSearch?.ACCurrent}
        label="AC전류"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.ACCurrent, 'ACCurrent')
        }
      />
      <CheckBox
        name="ACPower"
        id="ACPower"
        isChecked={paramsSearch?.ACPower}
        label="AC전력"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.ACPower, 'ACPower')
        }
      />
    </div>
  </div>
);

export default memo<Props>(GroupCompareChart);
