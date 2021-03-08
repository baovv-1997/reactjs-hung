// @flow
import React, { memo, useEffect, useRef, useState } from 'react';
// import useClickOutside from 'customHooks/useClickOutSide';
import images from 'themes/images';
import AutoSuggest from './AutoSuggest';

type Props = {
  placeholder?: String,
  handleClick: Function,
};

const Search = ({ placeholder, handleClick }: Props) => {
  const mockData = [
    { id: 0, name: '본관 남측' },
    { id: 1, name: '본관 동측' },
    { id: 2, name: '본관 동측 창호' },
    { id: 3, name: '본관 건물 앞' },
  ];

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

  // useClickOutside(
  //   wrapperRef,
  //   () => {
  //     if (display) {
  //       setDisplay(false);
  //     }
  //   },
  //   wrapperRef
  // );

  return (
    <div ref={wrapperRef} className="search">
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
      {display && <AutoSuggest data={mockData} search={searchValue} />}
    </div>
  );
};

Search.defaultProps = {
  placeholder: '',
};

export default memo<Props>(Search);
