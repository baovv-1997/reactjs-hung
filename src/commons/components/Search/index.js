// @flow
import React, { memo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  placeholder?: String,
  onClick: Function,
};

const Search = ({ placeholder, onClick }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleInputChange(e)}
      />
      <AiOutlineSearch
        className="search__icon"
        onClick={() => onClick(searchValue)}
      />
    </div>
  );
};

Search.defaultProps = {
  placeholder: '',
};

export default memo<Props>(Search);
