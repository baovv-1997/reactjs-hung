// @flow
import React, { memo, useState } from 'react';
import CheckBox from 'commons/components/CheckBox';
import Button from 'commons/components/Button';

type Props = {
  handleCheckboxSort: Function,
};

const ModalSortTable = ({ handleCheckboxSort }: Props) => {
  const defaultCheckBox = {
    power1: false,
    power2: false,
    power3: false,
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
          name="power1"
          isChecked={checkBox?.power1}
          label="발전량"
          id="power1"
          handleToggleCheckbox={() =>
            handleToggleCheckbox(checkBox?.power1, 'power1')
          }
        />
        <CheckBox
          name="power2"
          isChecked={checkBox?.power2}
          label="모듈온도"
          id="power2"
          handleToggleCheckbox={() =>
            handleToggleCheckbox(checkBox?.power2, 'power2')
          }
        />
        <CheckBox
          name="power3"
          isChecked={checkBox?.power3}
          label="수평 일사량"
          id="power3"
          handleToggleCheckbox={() =>
            handleToggleCheckbox(checkBox?.power3, 'power3')
          }
        />
      </div>
      <Button onClick={() => handleCheckboxSort(checkBox)}>등록</Button>
    </div>
  );
};

export default memo<Props>(ModalSortTable);
