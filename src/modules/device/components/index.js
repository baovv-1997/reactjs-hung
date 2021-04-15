// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import Radio from 'commons/components/Radio';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-js-pagination';
import IMAGES from 'themes/images';
import ROUTERS from 'constants/routers';
import { DeviceManagementOptionSeach } from 'constants/optionCheckbox';
import Select from 'commons/components/Select';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import Table from 'commons/components/Table';
import { DEVICE_HEAD_TABLE } from 'constants/tableHeadData';
import { getListCompany, getListDevice, getListPosition } from '../redux';
import { ROLE_COMPANY } from 'constants/index';

type Props = {
  history: {
    push: Function,
  },
};
const DeviceManagement = ({ history }: Props) => {
  const dispatch = useDispatch();
  const companyOptions = useSelector((state) => state?.device?.companyOptions);
  const deviceList = useSelector((state) => state?.device?.deviceList);
  const isLoading = useSelector((state) => state?.device?.isLoading);
  const totalPage = useSelector((state) => state?.device?.totalPage);
  const perPage = useSelector((state) => state?.device?.perPage);
  const { userInfo } = useSelector((state) => state.account);
  const posOptionList = useSelector((state) => state?.device?.posOptionList);
  const [currentOption, setCurrentOption] = useState('all');
  const [valueSearch, setValueSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [selectOption, setSelectOption] = useState(null);

  const roleName =
    userInfo && userInfo.roles && userInfo.roles[0] && userInfo.roles[0].name;

  useEffect(() => {
    dispatch(
      getListCompany({
        per_page: 9999,
      })
    );

    dispatch(
      getListPosition({
        per_page: 9999,
        com_id: roleName === ROLE_COMPANY ? userInfo?.com_id : '',
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getListDevice({
        [currentOption]: selectOption?.value,
        page: 1,
        com_id: roleName === ROLE_COMPANY ? userInfo?.com_id : '',
        per_page: 16,
      })
    );
  }, [selectOption, selectOption?.value]);

  // handle when slect change
  const onChangeSelect = (option) => {
    setSelectOption(option);
  };

  // handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  // handle when radio change
  const onChangeOption = (e) => {
    const { name } = e.target;
    setCurrentOption(name);
    setSelectOption(null);
  };

  // render list radio
  const renderRadioList = DeviceManagementOptionSeach.map((item) => (
    <Radio
      id={item.key}
      name={item.key}
      label={item.label}
      onChange={onChangeOption}
      isChecked={currentOption === item.key}
      labelRadio={item.label}
    />
  ));

  // handle submit search
  const handleSubmitSearch = () => {
    setActivePage(1);
    dispatch(
      getListDevice({
        [currentOption]: selectOption?.value,
        keyword: valueSearch,
        page: 1,
        per_page: 16,
      })
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmitSearch();
    }
  };

  const renderListOptions = () => {
    let listOptions = [];
    switch (currentOption) {
      case 'all':
        listOptions =
          roleName === ROLE_COMPANY
            ? posOptionList
            : [...companyOptions, ...posOptionList];
        break;
      case 'com_id':
        listOptions = companyOptions;
        break;
      case 'pos_id':
        listOptions = posOptionList;
        break;
      default:
        break;
    }

    return listOptions;
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    dispatch(
      getListDevice({
        [currentOption]: selectOption?.value,
        keyword: valueSearch,
        page,
        per_page: 16,
      })
    );
  };

  // Handle click to table row
  const handleClickTableRow = (item) => {
    history.push({
      pathname: `${ROUTERS.DEVICE}/${item.id}`,
      state: {
        id: item.id,
      },
    });
  };

  return (
    <div className="wrapper-device">
      <div className="wrapper-device__head-menu">
        <div className="wrapper-device__head-menu__title">
          <img src={IMAGES.iconTitle} alt="icon-title-device" />
          <span className="wrapper-device__head-menu__title__text">
            기기 정보
          </span>
          <span className="wrapper-device__head-menu__title__des">
            관리자 계정 정보를 수정하실 수 있습니다
          </span>
        </div>
        <div className="wrapper-device__head-menu__search">
          {roleName !== ROLE_COMPANY && (
            <div className="wrapper-device__head-menu__search__options">
              <p className="search-option-title">분류</p>{' '}
              <span className="search-option-character">|</span>{' '}
              {renderRadioList}
            </div>
          )}
          <div lassName="wrapper-device__head-menu__search__select">
            <Select
              listItem={renderListOptions()}
              onChange={(option) => onChangeSelect(option)}
              option={selectOption}
              placeholder={`${
                currentOption === 'pos_id' ? '설치위치 선택' : '업체 선택'
              }`}
            />
          </div>
          <div className="wrapper-device__head-menu__search__input">
            <Input
              placeholder="업체명, 구분, 설치위치로 검색해보세요."
              customClass="wrapper-input-search"
              onChange={handleInputChange}
              value={valueSearch}
              onKeyPress={(e) => handleKeyDown(e)}
            />
            <img
              src={IMAGES.icon_search}
              alt="Icon Search"
              className="search__icon"
              // onClick={() => handleClick(searchValue)}
              role="presentation"
            />
          </div>
          <Button customClass="custom-btn" onClick={handleSubmitSearch}>
            검색
          </Button>
        </div>
      </div>
      <div className="wrapper-device__table">
        <Table
          tableHeads={DEVICE_HEAD_TABLE}
          tableBody={deviceList}
          onClickRow={handleClickTableRow}
          isShowId
          isLoading={isLoading}
        />
        <div className="d-flex justify-content-end">
          <Button
            customClass="custom-btn"
            onClick={() => {
              history.push(ROUTERS.REGISTER_DEVICE);
            }}
          >
            등록
          </Button>
        </div>
        {totalPage > perPage && !isLoading && (
          <div className="wrapper-device__pagination">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={perPage}
              totalItemsCount={totalPage}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              firstPageText={
                <img
                  src={IMAGES.double_arrow_left}
                  alt=""
                  className="double-prev"
                />
              }
              lastPageText={
                <img
                  src={IMAGES.double_arrow_right}
                  alt=""
                  className="double-prev"
                />
              }
              prevPageText={
                <img src={IMAGES.arrow_left} alt="" className="double-prev" />
              }
              nextPageText={
                <img src={IMAGES.arrow_right1} alt="" className="double-prev" />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(DeviceManagement);
