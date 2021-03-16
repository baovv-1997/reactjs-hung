// @flow
import React, { memo, useRef, useState } from 'react';
import { mockDataArea } from 'mockData/mainData';
import images from 'themes/images';
import useClickOutside from 'customHooks/useClickOutSide';
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
  const [option, setOption] = useState(mockDataArea[0]);
  const [isShow, setIsShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const wrapperRef = useRef(null);
  const iconRef = useRef(null);

  // when input search change set value
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
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
            value={searchTerm}
            onChange={handleSearchChange}
            setSearchTerm={setSearchTerm}
          />
        ) : (
          ''
        )}
        {isSelect ? (
          <SelectDropdown
            placeholder="List Selects"
            listItem={mockDataArea}
            onChange={(ops) => {
              setOption(ops);
            }}
            option={option}
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

export default memo<Props>(Header);
