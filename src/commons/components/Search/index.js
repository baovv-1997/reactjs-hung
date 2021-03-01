// @flow
import React, { memo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  placeholder?: String,
};

const Search = ({ placeholder }: Props) => {
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
      <AiOutlineSearch className="search__icon" />
    </div>
  );
};

Search.defaultProps = {
  placeholder: '',
};

export default memo<Props>(Search);
