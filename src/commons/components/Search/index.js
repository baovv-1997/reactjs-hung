// @flow
import React, { memo, useEffect, useRef, useState } from 'react';
import images from 'themes/images';
import AutoSuggest from './AutoSuggest';

type Props = {
  placeholder?: string,
  handleClick: Function,
  customClass?: string,
};

const Search = ({ placeholder, handleClick, customClass = '' }: Props) => {
  const [display, setDisplay] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const wrapperRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const updateSearchInput = (value) => {
    setSearchValue(value);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className={`search ${customClass}`}>
      <input
        className="search__input"
        onClick={() => setDisplay(true)}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleInputChange(e)}
      />

      <img
        src={images.icon_search}
        alt="Icon Search"
        className="search__icon"
        onClick={() => handleClick(searchValue)}
        role="presentation"
      />
      {display && (
        <AutoSuggest search={searchValue} onClick={updateSearchInput} />
      )}
    </div>
  );
};

Search.defaultProps = {
  placeholder: '',
  customClass: '',
};

export default memo<Props>(Search);
