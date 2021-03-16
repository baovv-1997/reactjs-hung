// @flow
import React, { memo, useEffect, useRef, useState } from 'react';
import images from 'themes/images';
import AutoSuggest from './AutoSuggest';

type Props = {
  placeholder?: string,
  handleIconClick?: Function,
  customClass?: string,
  value?: string,
  onChange?: Function,
  setSearchTerm?: Function,
  options?: Array<{id: number, name: string}>,
  handleKeyDown: Function,
};

const Search = ({
  placeholder,
  handleIconClick = () => {},
  customClass = '',
  value = '',
  onChange = () => {},
  setSearchTerm = () => {},
  options = [],
  handleKeyDown
}: Props) => {
  const [display, setDisplay] = useState(false);

  const wrapperRef = useRef(null);

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

  const updateSearchInput = (searchValue) => {
    setSearchTerm(searchValue);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className={`search ${customClass}`}>
      <input
        className="search__input"
        onClick={() => setDisplay(true)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={(e) => handleKeyDown(e)}
      />

      <img
        src={images.icon_search}
        alt="Icon Search"
        className="search__icon"
        onClick={handleIconClick}
        role="presentation"
      />
      {display && <AutoSuggest search={value} onClick={updateSearchInput} options={options} />}
    </div>
  );
};

Search.defaultProps = {
  placeholder: '',
  customClass: '',
  value: '',
  onChange: () => {},
  setSearchTerm: () => {},
  handleIconClick: () => {},
  options:[],
};

export default memo<Props>(Search);
