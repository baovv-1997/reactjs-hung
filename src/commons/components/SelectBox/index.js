// @flow
import React, { memo, useState } from 'react';

type Props = {
  options?: Array,
  label?: String,
};

const SelectBox = ({ options, label }: Props) => {
  const [defaultvalue, setDefaultValue] = useState(options[0]);

  const handleSelectChange = (e) => {
    setDefaultValue(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select
        className="form-control"
        onChange={handleSelectChange}
        value={defaultvalue}
      >
        {options.length ? (
          options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
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
  options: [],
  label: '',
};

export default memo<Props>(SelectBox);
