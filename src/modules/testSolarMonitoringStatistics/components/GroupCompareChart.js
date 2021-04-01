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
        name="PVVoltage"
        isChecked={paramsSearch?.PVVoltage}
        label="PV전압"
        subLabel="v1"
        id="PVVoltage"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.PVVoltage, 'PVVoltage')
        }
      />
      <CheckBox
        name="PVCurrent"
        id="PVCurrent"
        subLabel="l1"
        isChecked={paramsSearch?.PVCurrent}
        label="PV전류"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.PVCurrent, 'PVCurrent')
        }
      />
      <CheckBox
        name="outputVoltage"
        id="outputVoltage"
        subLabel="v2"
        isChecked={paramsSearch?.outputVoltage}
        label="출력전압"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.outputVoltage, 'outputVoltage')
        }
      />
      <CheckBox
        name="outputCurrent"
        id="outputCurrent"
        subLabel="l2"
        isChecked={paramsSearch?.outputCurrent}
        label="출력전류"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.outputCurrent, 'outputCurrent')
        }
      />
      <CheckBox
        name="print"
        id="print"
        subLabel="p"
        isChecked={paramsSearch?.print}
        label="출력"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.print, 'print')
        }
      />
    </div>
  </div>
);

export default memo<Props>(GroupCompareChart);
