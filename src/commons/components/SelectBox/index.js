// @flow
import React, { memo, useState } from 'react';

type Props = {
  options: Array<{ key: number, value: string }>,
  label?: String,
};

const SelectBox = ({ options, label }: Props) => {
  const [defaultvalue, setDefaultValue] = useState(options && options[0]);

  const handleSelectChange = (e) => {
    setDefaultValue(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select
        className="form-control"
        onChange={(e) => handleSelectChange(e)}
        value={defaultvalue}
      >
        {options && options.length ? (
          options.map((option) => {
            return (
              <option value={option.value} key={option.key}>
                {option.value}
              </option>
            );
          })
        ) : (
          <option value="">No data</option>
        )}
      </select>
    </div>
  );
};

SelectBox.defaultProps = {
  label: '',
};

export default memo<Props>(SelectBox);
