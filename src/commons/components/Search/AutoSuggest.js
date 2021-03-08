// @flow
import React, { memo } from 'react';

type Props = {
  search?: string,
  onClick: Function,
};

// mockdata
const options = [
  { id: 0, name: '본관 남측' },
  { id: 1, name: '본관 동측' },
  { id: 2, name: '본관 동측 창호' },
  { id: 3, name: '본관 건물 앞' },
  { id: 10, name: '본관 남측' },
  { id: 11, name: '본관 동측' },
  { id: 12, name: '본관 동측 창호' },
  { id: 13, name: '본관 건물 앞' },
  { id: 110, name: '본관 남측' },
  { id: 111, name: '본관 동측' },
  { id: 112, name: '본관 동측 창호' },
  { id: 123, name: '본관 건물 앞' },
];

const AutoSuggest = ({ search = '', onClick }: Props) => {
  return (
    <div className="auto-suggest">
      {options
        .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
        .map((option) => (
          <p
            className="auto-suggest__item"
            key={option.id}
            onClick={() => onClick(option.name)}
            role="presentation"
          >
            {option.name}
          </p>
        ))}
    </div>
  );
};

AutoSuggest.defaultProps = {
  search: '',
};

export default memo<Props>(AutoSuggest);
