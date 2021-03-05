// @flow
import React, { memo, useState } from 'react';
import images from 'themes/images';

import Search from '../Search';
import SelectDropdown from '../Select';

type Props = {
  isSearch?: boolean,
  isSelect?: boolean,
  eventCount?: number,
};

const listItem = [
  { value: 'naver.com', label: 'naver.com' },
  { value: 'hanmail.net', label: 'hanmail.net' },
  { value: 'nate.com', label: 'nate.com' },
  { value: 'gmail.com', label: 'gmail.com' },
];

const Header = ({
  isSearch = false,
  isSelect = false,
  eventCount = 0,
}: Props) => {
  const [option, seOption] = useState(listItem[0]);
  return (
    <div className="header">
      <div className="header__left">
        {isSearch ? (
          <Search placeholder="회사명이나 구역명으로 검색해보세요." />
        ) : (
          ''
        )}
        {isSelect ? (
          <SelectDropdown
            placeholder="List Selects"
            listItem={listItem}
            onChange={(ops) => {
              seOption(ops);
            }}
            option={option}
            disabled={false}
            isSearchable={false}
            blurInputOnSelect={false}
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
          />
          <span className="header__notification">{eventCount}</span>
        </div>

        <div className="header__label-event">
          <span className="header__label-content">이벤트발생</span>
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
