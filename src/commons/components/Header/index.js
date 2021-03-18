/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { memo, useEffect, useRef, useState } from 'react';
import images from 'themes/images';
import useClickOutside from 'customHooks/useClickOutSide';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from 'customHooks/useDebounce';
import { getListCompany, getListPosition } from 'modules/main/redux';
import Search from '../Search';
import SelectDropdown from '../Select';
import ModalEvent from './ModalEvent';

type Props = {
  isSearch?: boolean,
  isSelect?: boolean,
  eventCount?: number,
};

const Header = ({
  isSearch = false,
  isSelect = false,
  eventCount = 0,
}: Props) => {

  const dispatch = useDispatch();
  const { listPositions, listCompany, isSpinner } = useSelector(state => state?.main);
  const [optionDropdown, setOptionDropdown] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState({ label: '', value: '', key: '', id: '' });

  const wrapperRef = useRef(null);
  const iconRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm.label, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getListCompany({ keyword: debouncedSearchTerm }));
      dispatch(getListPosition({ keyword: debouncedSearchTerm }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm])

  // set option dropdown value when listposition != [];
  useEffect(() => {
    const indexDefault = listPositions.findIndex((item) => item?.label.includes('본관 남측'));
    setOptionDropdown(listPositions[indexDefault]);
  }, [listPositions])

  // Handle Icon search Click
  const handleIconClick = () => {
    console.log(searchTerm);
  }

  // Handle event press key enter search
  const handleKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      console.log(searchTerm);
    }
  }

  // when input search change set value
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm({ ...searchTerm, label: value });
  };

  // handle click outside event
  useClickOutside(
    wrapperRef,
    () => {
      if (isShow) {
        setIsShow(false);
      }
    },
    { iconRef }
  );

  return (
    <div className="header">
      <div className="header__left">
        {isSearch ? (
          <Search
            placeholder="회사명이나 구역명으로 검색해보세요."
            value={searchTerm.label}
            onChange={handleSearchChange}
            setSearchTerm={setSearchTerm}
            options={[...listPositions, ...listCompany]}
            handleIconClick={handleIconClick}
            handleKeyDown={handleKeyDownSearch}
            isSpinner={isSpinner}
          />
        ) : (
          ''
        )}
        {isSelect ? (
          <SelectDropdown
            placeholder="List Selects"
            listItem={listPositions}
            onChange={(ops) => {
              setOptionDropdown(ops);
            }}
            option={optionDropdown}
            disabled={false}
            isSearchable={false}
            blurInputOnSelect={false}
            customClass="header__select"
          />
        ) : (
          ''
        )}
      </div>
      <div className="header__right">
        <div className="header__event">
          <img
            src={images.icon_event}
            alt="Icon Event"
            className="header__icon"
            onClick={() => setIsShow(!isShow)}
            role="presentation"
            ref={iconRef}
          />
          {eventCount > 0 ? (
            <span className="header__notification">eventCount</span>
          ) : (
            ''
          )}
        </div>

        <div className="header__label-event">
          <span className="header__label-content">이벤트발생</span>

          {/* Modal event */}

          <ModalEvent isShow={isShow} wrapperRef={wrapperRef} />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  isSearch: false,
  isSelect: false,
  eventCount: 0,
};

export default memo < Props > (Header);
