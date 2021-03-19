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
        name="power"
        isChecked={paramsSearch?.power}
        label="발전량"
        id="power"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.power, 'power')
        }
      />
      <CheckBox
        name="insolation"
        id="insolation"
        isChecked={paramsSearch?.insolation}
        label="일사량"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.insolation, 'insolation')
        }
      />
      <CheckBox
        name="performance"
        id="performance"
        isChecked={paramsSearch?.performance}
        label="성능비"
        handleToggleCheckbox={() =>
          handleChangeSearch(paramsSearch?.performance, 'performance')
        }
      />
    </div>
  </div>
);

export default memo<Props>(GroupCompareChart);
