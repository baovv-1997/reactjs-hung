// @flow
import React, { memo, useState } from 'react';
import CheckBox from 'commons/components/CheckBox';
import Button from 'commons/components/Button';

type Props = {
  handleCheckboxSort: Function,
};

const ModalSortTable = ({ handleCheckboxSort }: Props) => {
  const defaultCheckBox = {
    power: false,
    temperature: false,
    insolation: false,
  };
  const [checkBox, setCheckBox] = useState(defaultCheckBox);
  const handleToggleCheckbox = (check, name) => {
    setCheckBox({
      ...checkBox,
      [name]: !check,
    });
  };

  return (
    <div className="modal-sorting">
      <div className="checkbox-header">이벤트명 필터</div>
      <div className="list-checkbox">
        <CheckBox
          name="power"
          isChecked={checkBox?.power}
          label="발전량"
          id="power"
          handleToggleCheckbox={() =>
            handleToggleCheckbox(checkBox?.power, 'power')
          }
        />
        <CheckBox
          name="temperature"
          id="temperature"
          isChecked={checkBox?.temperature}
          label="모듈온도"
          handleToggleCheckbox={() =>
            handleToggleCheckbox(checkBox?.temperature, 'temperature')
          }
        />
        <CheckBox
          name="insolation"
          id="insolation"
          isChecked={checkBox?.insolation}
          label="수평 일사량"
          handleToggleCheckbox={() =>
            handleToggleCheckbox(checkBox?.insolation, 'insolation')
          }
        />
      </div>
      <Button onClick={() => handleCheckboxSort(checkBox)}>등록</Button>
    </div>
  );
};

export default memo<Props>(ModalSortTable);
