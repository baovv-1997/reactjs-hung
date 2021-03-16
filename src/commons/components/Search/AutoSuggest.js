// @flow
import React, { memo } from 'react';

type Props = {
  search?: string,
  onClick: Function,
  options?: Array<{id: number, value: number, label: string}>
};

const AutoSuggest = ({ search = '', onClick, options = [] }: Props) => {
  return (
    <div className="auto-suggest">
      {options
        .filter(({ label }) => label.indexOf(search.toLowerCase()) > -1)
        .map((option, index) => (
          <p
            className="auto-suggest__item"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => onClick(option.label)}
            role="presentation"
          >
            {option.label}
          </p>
        ))}
    </div>
  );
};

AutoSuggest.defaultProps = {
  search: '',
  options: [],
};

export default memo<Props>(AutoSuggest);
