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
import Loading from 'commons/components/Loading';

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
  const posOptionList = useSelector((state) => state?.device?.posOptionList);
  const [currentOption, setCurrentOption] = useState('all');
  const [valueSearch, setValueSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [selectOption, setSelectOption] = useState(null);

  useEffect(() => {
    dispatch(getListCompany());
    dispatch(getListPosition());
  }, []);

  useEffect(() => {
    dispatch(
      getListDevice({
        [currentOption]: selectOption?.value,
        page: 1,
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
    dispatch(
      getListDevice({
        [currentOption]: selectOption?.value,
        keyword: valueSearch,
        page: 1,
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
        listOptions = [...companyOptions, ...posOptionList];
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
      })
    );
  };

  // Handle click to table row
  const handleClickTableRow = (item) => {
    history.push(`${ROUTERS.DEVICE}/${item.id}`);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="wrapper-device">
        <div className="wrapper-device__head-menu">
          <div className="wrapper-device__head-menu__title">
            <img src={IMAGES.iconTitle} alt="icon-title-device" />
            <span className="wrapper-device__head-menu__title__text">
              기기 관리
            </span>
            <span className="wrapper-device__head-menu__title__des">
              등록되어있는 기기정보들을 관리하실 수 있습니다.
            </span>
          </div>
          <div className="wrapper-device__head-menu__search">
            <div className="wrapper-device__head-menu__search__options">
              <p className="search-option-title">권한</p>{' '}
              <span className="search-option-character">|</span>{' '}
              {renderRadioList}
            </div>
            <div lassName="wrapper-device__head-menu__search__select">
              <Select
                listItem={renderListOptions()}
                onChange={(option) => onChangeSelect(option)}
                option={selectOption}
                placeholder="업체 선택"
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
          />
          <div className="d-flex justify-content-end">
            <Button
              customClass="custom-btn"
              onClick={() => {
                history.push(ROUTERS.REGISTER_DEVICE);
              }}
            >
              검색
            </Button>
          </div>
          {totalPage > perPage && (
            <div className="wrapper-device__pagination">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo<Props>(DeviceManagement);
