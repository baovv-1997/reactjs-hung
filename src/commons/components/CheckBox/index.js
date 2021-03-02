// @flow
import React, { memo } from 'react';

type Props = {
  id?: any,
  name?: string,
  label?: string,
  disabled?: boolean,
  customClass?: string,
  handleToggleCheckbox: Function,
  isChecked?: boolean,
};

export const CheckBox = ({
  id,
  name,
  label,
  disabled,
  customClass = '',
  handleToggleCheckbox,
  isChecked = false,
}: Props) => {
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
        onChange={handleToggleCheckbox}
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
  isChecked: false,
};

export default memo<Props>(CheckBox);
