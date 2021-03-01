// @flow
import React, { memo, useState } from 'react';

type Props = {
  id?: any,
  name?: string,
  label?: string,
  disabled?: boolean,
  customClass?: string,
};

const CheckBox = ({ id, name, label, disabled, customClass }: Props) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <input
        className={`checkbox ${customClass}`}
        type="checkbox"
        id={id}
        name={name}
        value={label}
        checked={isChecked}
        disabled={disabled}
        onChange={toggleCheckboxChange}
      />
      <label htmlFor={label} label={label}>
        {label}
      </label>
    </>
  );
};

CheckBox.defaultProps = {
  id: '',
  name: '',
  label: '',
  disabled: false,
  customClass: '',
};

export default memo<Props>(CheckBox);
