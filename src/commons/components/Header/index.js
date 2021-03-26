/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { memo, useEffect, useRef, useState } from 'react';
import images from 'themes/images';
import useClickOutside from 'customHooks/useClickOutSide';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from 'customHooks/useDebounce';
import { getCompanySearchMain, getPositionSearchMain, getCardMeasureSearchPosition, getCardMeasureSearchCompany, setPositionId } from 'modules/main/redux';
import Search from '../Search';
import SelectDropdown from '../Select';
import ModalEvent from './ModalEvent';
import ModalPopup from '../Modal';

type Props = {
  isSearch?: boolean,
  isSelect?: boolean,
  eventCount?: number,
  handleChangeSelect?: Function,
};

const Header = ({
  isSearch = false,
  isSelect = false,
  eventCount = 0,
  handleChangeSelect = () => { },
}: Props) => {

  const dispatch = useDispatch();
  const { listPositions, optionsCompany, optionsPosition, isSpinner, positionId } = useSelector(state => state?.main);
  const [optionDropdown, setOptionDropdown] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState({ label: '', value: '', key: '', id: '' });
  const [modal, setModal] = useState({ isShow: false, content: '' });

  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  const posId = useRef(positionId);

  const debouncedSearchTerm = useDebounce(searchTerm.label, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getCompanySearchMain({ keyword: debouncedSearchTerm }));
      dispatch(getPositionSearchMain({ keyword: debouncedSearchTerm }));
    }
  }, [debouncedSearchTerm])

  // set option dropdown value when listposition != [];
  useEffect(() => {
    if (posId.current) {
      const positionSelected = listPositions.filter(item => item.id === posId.current);
      setOptionDropdown(positionSelected[0]);
      // set positionId = 0 to set default dropdown
      dispatch(setPositionId({ id: 0 }))
    }
    else {
      const indexDefault = listPositions.findIndex((item) => item?.label.includes('본관 남측'));
      setOptionDropdown(listPositions[indexDefault]);
    }
  }, [listPositions, positionId])

  // optionDropdown change will pass optionvalue to Main -> Dashboard area
  useEffect(() => {
    if (optionDropdown) {
      handleChangeSelect(optionDropdown);
    }
  }, [optionDropdown])

  const searchSubmit = () => {
    const type = searchTerm?.key;
    switch (type) {
      case 'posId':
        dispatch(getCardMeasureSearchPosition({ type: 'summary', pos_id: searchTerm.id }));
        break;
      case 'comId':
        dispatch(getCardMeasureSearchCompany({ type: 'summary', com_id: searchTerm.id }));
        break;
      default:
        setModal({ ...modal, isShow: true, content: '구역명이나 업체명을 정확히 입력해주세요' });
        break;
    }
  }

  // Handle Icon search Click
  const handleIconClick = () => {
    searchSubmit();
  }

  // Handle event press key enter search
  const handleKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      searchSubmit();
    }
  }

  // when input search change set value
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm({ label: value });
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
            options={[...optionsPosition, ...optionsCompany]}
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
            <span className="header__notification">{eventCount}</span>
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
      <ModalPopup
        isOpen={modal.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() =>
          setModal({
            ...modal,
            isShow: false,
            content: '',
          })
        }
        handleClose={() =>
          setModal({
            ...modal,
            isShow: false,
            content: '',
          })
        }
        textBtnRight="확인"
      >
        {modal.content}
      </ModalPopup>
    </div>
  );
};

Header.defaultProps = {
  isSearch: false,
  isSelect: false,
  eventCount: 0,
  handleChangeSelect: () => { },
};

export default memo < Props > (Header);
