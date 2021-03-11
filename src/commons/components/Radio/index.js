// @flow
// libs
import React, { memo } from 'react';

type Props = {
  name?: string,
  onChange: Function,
  disabled?: boolean,
  labelRadio: string,
  isChecked: boolean,
  id?: string,
};

export const Radio = ({
  labelRadio,
  name = '',
  isChecked,
  onChange,
  id = '',
  disabled = false,
}: Props) => {
  return (
    <div className="wrap-radio">
      <label className="custom-radio d-flex" htmlFor={id}>
        <input
          type="radio"
          checked={`${isChecked ? 'checked' : ''}`}
          name={name}
          onChange={(e) => onChange(e)}
          id={id}
          disabled={disabled}
        />
        <span className="checkmark" />
        <span className="label">{labelRadio}</span>
      </label>
    </div>
  );
};

Radio.defaultProps = {
  name: '',
  disabled: false,
  id: '',
};

export default memo<Props>(Radio);
