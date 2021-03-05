// @flow
import React from 'react';

type Props = {
  data: Array,
  search: string,
};

const AutoSuggest = ({ data, search }: Props) => {
  return (
    <div className="auto-suggest">
      {data
        .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
        .map((option) => (
          <p className="auto-suggest__item" key={option.id}>
            {option.name}
          </p>
        ))}
    </div>
  );
};

export default AutoSuggest;
