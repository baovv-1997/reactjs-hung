// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import {
  listMockupType,
  listMockupDataCompany,
  listParkingLot,
} from 'mockData/listCompany';

import { headStatusCompany } from 'constants/headerTable';
import * as StatusCompanyAction from '../redux';
import ItemContentTab from './ItemContentTab';

const StatusCompanyPage = () => {
  const perPage = 6;
  const totalPage = 100;
  const [menuTab, setMenuTab] = useState('bulk');
  console.log(menuTab, 'menuTab');
  const { isProcessing, listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };
  const defaultCheckBox = {
    power: false,
    temperature: false,
    insolation: false,
  };
  const [itemSelect, setItemSelect] = useState({});
  const [itemSelectMocKup, setItemSelectMocKup] = useState({});
  const [itemParkingLot, setParkingLot] = useState({});
  const [paginationType, setPaginationType] = useState(defaultOption);
  const [activePage, setActivePage] = useState(1);
  const [checkBox, setCheckBox] = useState(defaultCheckBox);

  const [paramsSearch, setParamsSearch] = useState({
    sort_by: '',
    sort_dir: '',
    page: '',
    keyword: '',
  });

  const powerData = {
    type: 'power',
    data: [
      { title: '일일 평균 1시간 발전량', value: '60' },
      { title: '일일발전량 달성율', value: '85.2' },
    ],
  };

  const temperatureData = {
    type: 'temperature',
    data: [
      { title: '현재 모듈 온도', value: '30.8' },
      { title: '최고 모듈 온도', value: '35.2' },
    ],
  };

  const insolationData = {
    type: 'insolation',
    data: [
      { title: '수평 일사량', value: '22' },
      { title: '경사 일사량', value: '46' },
    ],
  };

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

  const handleClickSelectMocKup = (item) => {
    console.log(item);
    setItemSelectMocKup(item);
  };

  const handleClickSelectParkingLot = (item) => {
    setParkingLot(item);
  };

  const handleToggleCheckbox = (check, name) => {
    setCheckBox({
      ...checkBox,
      [name]: !check,
    });
  };

  const handleChangePagination = (option) => {
    setPaginationType(option);
  };

  const onSelect = (eventKey) => {
    window.scrollTo(0, 0);
    setMenuTab(eventKey);
    setPaginationType(defaultOption);
    setCheckBox(defaultCheckBox);
  };

  const handleDownloadRaw = () => {
    console.log('download Raw');
  };

  const handleDownloadTrend = () => {
    console.log('download Trend');
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
          <div className="content-body-left">
            <div>
              <Tabs
                defaultActiveKey="bulk"
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                <Tab
                  eventKey="bulk"
                  title={
                    <div className="tab-name">
                      아반시스 코리아 <span>전체</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    powerData={powerData}
                    temperatureData={temperatureData}
                    insolationData={insolationData}
                    headStatusCompany={headStatusCompany}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                  />
                </Tab>
                {/* <Tab
                  eventKey="bulk2"
                  title={
                    <div className="tab-name">
                      인버터 ID <span>본관 남측</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    powerData={powerData}
                    temperatureData={temperatureData}
                    insolationData={insolationData}
                    headStatusCompany={headStatusCompany}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                  />
                </Tab>
                <Tab
                  eventKey="bulk3"
                  title={
                    <div className="tab-name">
                      인버터 ID <span>본관 동측</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    powerData={powerData}
                    temperatureData={temperatureData}
                    insolationData={insolationData}
                    headStatusCompany={headStatusCompany}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                  />

                </Tab> */}
                <div className="opacity d-block pagination">
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
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusCompanyPage;
