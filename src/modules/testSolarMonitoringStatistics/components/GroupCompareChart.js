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
        label="PV전압(v1)"
        id="PVVoltage"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.PVVoltage, 'PVVoltage')
        }
      />
      <CheckBox
        name="PVCurrent"
        id="PVCurrent"
        isChecked={paramsSearch?.PVCurrent}
        label="PV전류(l1)"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.PVCurrent, 'PVCurrent')
        }
      />
      <CheckBox
        name="outputVoltage"
        id="outputVoltage"
        isChecked={paramsSearch?.outputVoltage}
        label="출력전압(v2)"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.outputVoltage, 'outputVoltage')
        }
      />
      <CheckBox
        name="outputCurrent"
        id="outputCurrent"
        subLabel="l2"
        isChecked={paramsSearch?.outputCurrent}
        label="출력전류(l2)"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.outputCurrent, 'outputCurrent')
        }
      />
      <CheckBox
        name="print"
        id="print"
        isChecked={paramsSearch?.print}
        label="출력(p)"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.print, 'print')
        }
      />
    </div>
  </div>
);

export default memo<Props>(GroupCompareChart);
