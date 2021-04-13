// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import Radio from 'commons/components/Radio';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-js-pagination';
import IMAGES from 'themes/images';
import ROUTERS from 'constants/routers';
import { accountOptions } from 'constants/optionCheckbox';
import Input from 'commons/components/Input';
import Button from 'commons/components/Button';
import Table from 'commons/components/Table';
import { ACCOUNT_HEAD } from 'constants/tableHeadData';
// import { getListCompany, getListPosition } from '../../../device/redux';
import Loading from 'commons/components/Loading';
import { getAccountList } from '../../redux';

type Props = {
  history: {
    push: Function,
  },
};
const AccountManagement = ({ history }: Props) => {
  const dispatch = useDispatch();
  const accountList = useSelector((state) => state?.account?.accountList);
  const isProcessing = useSelector((state) => state?.account?.isProcessing);
  const totalPage = useSelector((state) => state?.account?.totalPage);
  const perPage = useSelector((state) => state?.account?.perPage);
  const [currentOption, setCurrentOption] = useState('all');
  const [valueSearch, setValueSearch] = useState('');
  const [activePage, setActivePage] = useState(1);

  // handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  // handle when radio change
  const onChangeOption = (e) => {
    const { name } = e.target;
    setCurrentOption(name);
    setActivePage(1);
  };

  // render list radio
  const renderRadioList = accountOptions.map((item) => (
    <Radio
      id={item.key}
      name={item.key}
      label={item.label}
      onChange={onChangeOption}
      isChecked={currentOption === item.key}
      labelRadio={item.label}
    />
  ));

  // Handle click to table row
  const handleClickTableRow = (item) => {
    history.push({
      pathname: `${ROUTERS.ACCOUNT_MANAGEMENT}/detail/${item.id}`,
      state: {
        id: item.id,
      },
    });
  };

  useEffect(() => {
    dispatch(
      getAccountList({
        role: currentOption,
        page: 1,
        per_page: 16,
      })
    );
  }, [currentOption]);

  // handle submit search
  const handleSubmitSearch = () => {
    dispatch(
      getAccountList({
        role: currentOption,
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
  const handlePageChange = (page) => {
    setActivePage(page);
    dispatch(
      getAccountList({
        role: currentOption,
        keyword: valueSearch,
        page,
        per_page: 16,
      })
    );
  };

  return (
    <>
      {isProcessing && <Loading />}
      <div className="account">
        <div className="account__head-menu">
          <div className="account__head-menu__title">
            <img src={IMAGES.iconTitle} alt="icon-title-device" />
            <span className="account__head-menu__title__text">계정 관리</span>
            <span className="account__head-menu__title__des">
              등록되어있는 관리자들을 관리하실 수 있습니다.
            </span>
          </div>
          <div className="account__head-menu__search">
            <div className="account__head-menu__search__options">
              <p className="search-option-title">권한</p>{' '}
              <span className="search-option-character">|</span>{' '}
              {renderRadioList}
            </div>

            <div className="account__head-menu__search__input">
              <Input
                placeholder="아이디, 담당자, 이메일로 검색해보세요."
                customClass="wrapper-input-search"
                onChange={handleInputChange}
                value={valueSearch}
                onKeyPress={(e) => handleKeyDown(e)}
              />
              <img
                src={IMAGES.icon_search}
                alt="Icon Search"
                className="search__icon"
                role="presentation"
              />
            </div>
            <Button customClass="custom-btn" onClick={handleSubmitSearch}>
              검색
            </Button>
          </div>
        </div>
        <div className="account__table">
          <Table
            tableHeads={ACCOUNT_HEAD}
            tableBody={accountList}
            onClickRow={handleClickTableRow}
            isShowId
          />
          {totalPage > perPage && (
            <div className="account__pagination">
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
                  <img
                    src={IMAGES.arrow_right1}
                    alt=""
                    className="double-prev"
                  />
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo<Props>(AccountManagement);
