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
  handleCheckboxDefault: Function,
  customClass: string,
  optionDefault: Array<string>,
};
export const MutipleCheckbox = ({
  listCheckBox,
  label,
  customClass,
  submitValue,
  optionDefault,
}: Props) => {
  const [checkedItems, setCheckedItems] = useState(optionDefault);
  console.log('optionDefault', optionDefault);
  const handleChange = (event) => {
    const { id } = event.target;

    if (!checkedItems.includes(id)) {
      setCheckedItems([...checkedItems, id]);
      submitValue([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id));
      submitValue(checkedItems.filter((item) => item !== id));
    }
  };

  return (
    <>
      <div>{label}</div>
      {listCheckBox.map((item) => (
        <div className={`${customClass}`}>
          <CheckBox
            name={item.name}
            isChecked={checkedItems.includes(item.key.toString())}
            handleToggleCheckbox={handleChange}
            id={item.key}
            label={item?.label}
          />
        </div>
      ))}
    </>
  );
};

export default memo<Props>(MutipleCheckbox);
