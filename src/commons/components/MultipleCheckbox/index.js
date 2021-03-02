// @flow
import React, { useState, memo } from 'react';
import CheckBox from '../CheckBox';

type Props = {
  listCheckBox: Array<{
    name: string,
    key: string,
    label: string,
  }>,
  label: string,
  customClass: string,
};
export const MutipleCheckbox = ({
  listCheckBox,
  label,
  customClass,
}: Props) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <div>{label}</div>
      {listCheckBox.map((item) => (
        <div className={`${customClass}`}>
          <label key={item.key}>
            {item.name}
            <CheckBox
              name={item.name}
              isChecked={checkedItems[item.name]}
              handleToggleCheckbox={handleChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default memo<Props>(MutipleCheckbox);
