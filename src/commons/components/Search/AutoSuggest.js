// @flow
import React, { memo } from 'react';

type Props = {
  onClick: Function,
  options?: Array<{id: number, value: number, label: string}>
};

const AutoSuggest = ({ onClick, options = [] }: Props) => {
  return (
    <div className="auto-suggest">
      {options
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
  options: [],
};

export default memo<Props>(AutoSuggest);
