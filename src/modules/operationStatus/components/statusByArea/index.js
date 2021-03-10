// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import Table from 'commons/components/Table';
import SelectDropdown from 'commons/components/Select';
import Pagination from 'react-js-pagination';
import Button from 'commons/components/Button';
import {
  tableOperationStatusByAreaCompany,
  listMockupType,
  listParkingLot,
} from 'mockData/listCompany';
import { headOperationStatusByAreaCompany } from 'constants/headerTable';
import { listPaginationType } from 'constants/listKey';
import * as StatusCompanyAction from 'modules/statusCompany/redux';

const StatusByAreaCompany = () => {
  const perPage = 6;
  const totalPage = 100;
  const { isProcessing, listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const defaultOption = {
    id: 1,
    value: 12,
    label: '12 개씩 보기',
  };

  const [itemSelect, setItemSelect] = useState({});
  const [itemSelectMocKup, setItemSelectMocKup] = useState({});
  const [itemParkingLot, setItemParkingLot] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [paginationType, setPaginationType] = useState(defaultOption);

  const [paramsSearch, setParamsSearch] = useState({
    sort_by: '',
    sort_dir: '',
    page: '',
    keyword: '',
  });

  const dispatch = useDispatch();
  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    dispatch(StatusCompanyAction.getListStatusCompany(paramsSearch));
  }, [paramsSearch, dispatch]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

  // console.log(type, 'type', isProcessing);
  const handleClickSelectCompany = (item) => {
    setItemSelect(item);
    setParamsSearch({
      sort_by: '',
      sort_dir: '',
      page: '',
      keyword: '',
    });
  };

  const handleChangePagination = (option) => {
    setPaginationType(option);
  };

  const handleDownloadRaw = () => {
    console.log('download Raw');
  };
  const handleClickSelectMocKup = (item) => {
    console.log(item);
    setItemSelectMocKup(item);
  };

  const handleClickSelectParkingLot = (item) => {
    console.log(item);
    setItemParkingLot(item);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderListCompany =
    listStatusCompanySelect &&
    listStatusCompanySelect.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClickSelectCompany(item)}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${itemSelect?.id === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  const renderListMocKup =
    listMockupType &&
    listMockupType.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClickSelectMocKup(item)}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${itemSelectMocKup?.id === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  const renderListParkingLot =
    listParkingLot &&
    listParkingLot.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClickSelectParkingLot(item)}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${itemParkingLot?.id === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));
  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
        <div className="content-body page-company">
          <div className="content-select-sidebar">
            <TitleSubHeader title="실증단지" />
            <ul className="list-item-select">{renderListCompany}</ul>
            <TitleSubHeader title="목업" titleLight="RTU" className="mt-5" />
            <ul className="list-item-select">{renderListMocKup}</ul>
            <TitleSubHeader title="주차장" className="mt-5" />
            <ul className="list-item-select">{renderListParkingLot}</ul>
          </div>
          <div className="content-body-left w-100 content-body-border">
            <TitleSubHeader title="이벤트 현황" />
            <div className="group-option-table d-flex  justify-content-between mb-3">
              <SelectDropdown
                placeholder="구분"
                listItem={listPaginationType}
                onChange={(option) => handleChangePagination(option)}
                option={paginationType || null}
              />
              <div className="group-btn-download">
                <Button onClick={() => handleDownloadRaw()}>
                  Raw Date 다운
                </Button>
              </div>
            </div>
            <Table
              tableHeads={headOperationStatusByAreaCompany}
              tableBody={tableOperationStatusByAreaCompany}
              // isShowId
              handleCheckboxSort={() => {}}
              showModalSort={{
                isShow: true,
                keyItem: 5,
              }}
            />
            <div className="group-btn-register text-right">
              <Button onClick={() => {}}>등록</Button>
            </div>
            <div className="opacity d-block pagination mt-4">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusByAreaCompany;
