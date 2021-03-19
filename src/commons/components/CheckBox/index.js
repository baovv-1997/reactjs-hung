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
  onKeyPress?: Function,
  subLabel?: string,
};

export const CheckBox = ({
  id,
  name,
  label,
  disabled,
  customClass = '',
  handleToggleCheckbox,
  isChecked = false,
  onKeyPress = () => {},
  subLabel = '',
}: Props) => {
  return (
    <div
      className={`${customClass} checkbox ${
        isChecked ? 'checkbox--checked' : ''
      }`}
    >
      <label className="checkbox__label" htmlFor={id}>
        <input
          className="checkbox__input"
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={isChecked}
          disabled={disabled}
          onKeyPress={onKeyPress}
          onChange={handleToggleCheckbox}
        />
        <span>
          {label}
          <i>{subLabel}</i>
        </span>
      </label>
    </div>
  );
};

CheckBox.defaultProps = {
  id: '',
  name: '',
  label: '',
  disabled: false,
  customClass: '',
  isChecked: false,
  onKeyPress: () => {},
  subLabel: '',
};

export default memo<Props>(CheckBox);
