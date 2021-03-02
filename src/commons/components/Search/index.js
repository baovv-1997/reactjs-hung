// @flow
import React, { memo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  placeholder?: String,
  handleClick: Function,
};

const Search = ({ placeholder, handleClick }: Props) => {
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
        onClick={() => handleClick(searchValue)}
      />
    </div>
  );
};

Search.defaultProps = {
  placeholder: '',
};

export default memo<Props>(Search);
