// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import Pagination from 'react-js-pagination';
import {
  listMockupType,
  dataTableStatisticsCompany,
  listParkingLot,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import * as SignInAction from 'modules/accounts/redux';
// import { useHistory } from 'react-router-dom';
import ItemContentTab from './ItemContentTab';
// import ROUTERS from 'constants/routers';

const OperationStatusPage = () => {
  // const history = useHistory();
  const perPage = 6;
  const totalPage = 100;
  const [menuTab, setMenuTab] = useState('bulk');
  console.log(menuTab, 'menuTab');
  const { isProcessing, listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const { listInverter } = useSelector((state) => state?.account);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    classification: 'minute',
    startDate: new Date() || null,
    endDate: new Date() || null,
    vendorCompany: null,
    inverter: null,
    company: null,
    mockupType: null,
    parkingLot: null,
    insolation: false,
    performance: false,
    generation: false,
    pagination: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    day: '300',
    month: '9,000',
    year: '300',
  };

  useEffect(() => {
    dispatch(StatusCompanyAction.getListStatusCompany());
  }, []);

  const dispatch = useDispatch();
  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    console.log('Call api on page');
  }, [
    paramsSearch?.page,
    paramsSearch?.company,
    paramsSearch?.mockupType,
    paramsSearch?.parkingLot,
    paramsSearch?.insolation,
    paramsSearch?.generation,
    paramsSearch?.pagination,
    dispatch,
  ]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

  // console.log(type, 'type', isProcessing);
  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
          company: item.id,
        });
        break;
      case 'mockupType':
        setParamsSearch({
          ...paramsSearch,
          mockupType: item.id,
        });
        break;
      case 'parkingLot':
        setParamsSearch({
          ...paramsSearch,
          parkingLot: item.id,
        });
        break;
      case 'generation':
        setParamsSearch({
          ...paramsSearch,
          generation: !item,
        });
        break;
      case 'performance':
        setParamsSearch({
          ...paramsSearch,
          performance: !item,
        });
        break;
      case 'insolation':
        setParamsSearch({
          ...paramsSearch,
          insolation: !item,
        });
        break;
      case 'classification':
        setParamsSearch({
          ...paramsSearch,
          classification: item,
        });
        break;
      case 'pagination':
        setParamsSearch({
          ...paramsSearch,
          pagination: item,
        });
        break;

      case 'inverter':
        setParamsSearch({
          ...paramsSearch,
          inverter: item,
        });
        break;
      case 'vendorCompany':
        setParamsSearch({
          ...paramsSearch,
          vendorCompany: item,
          inverter: null,
        });
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            com_id: item?.value,
          })
        );

        break;
      case 'page':
        setParamsSearch({
          ...paramsSearch,
          page: item,
        });
        break;
      case 'startDate':
        setParamsSearch({
          ...paramsSearch,
          startDate: item,
        });
        break;
      case 'endDate':
        setParamsSearch({
          ...paramsSearch,
          endDate: item,
        });
        break;
      case 'submitSearch':
        // call api update list table
        break;
      default:
        break;
    }
  };

  const onSelect = (eventKey) => {
    window.scrollTo(0, 0);
    setMenuTab(eventKey);
    setParamsSearch(defaultSearch);
  };

  const handleDownloadTrend = (name) => {
    console.log(name, 'download Trend');
  };

  const renderListCompany =
    listStatusCompanySelect &&
    listStatusCompanySelect.map((item) => (
      <li
        key={item.id}
        onClick={() => handleChangeSearch(item, 'statusCompany')}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${paramsSearch?.company === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  const renderListMocKup =
    listMockupType &&
    listMockupType.map((item) => (
      <li
        key={item.id}
        onClick={() => handleChangeSearch(item, 'mockupType')}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${paramsSearch?.mockupType === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  const renderListParkingLot =
    listParkingLot &&
    listParkingLot.map((item) => (
      <li
        key={item.id}
        onClick={() => handleChangeSearch(item, 'parkingLot')}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${paramsSearch?.parkingLot === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 통계" />
        <div className="content-body page-company">
          <div className="content-select-sidebar">
            <TitleSubHeader title="실증단지" />
            <ul className="list-item-select overflowY">{renderListCompany}</ul>
            <TitleSubHeader title="목업" titleLight="RTU" className="mt-5" />
            <ul className="list-item-select overflowY">{renderListMocKup}</ul>
            <TitleSubHeader title="주차장" className="mt-5" />
            <ul className="list-item-select overflowY">
              {renderListParkingLot}
            </ul>
          </div>
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                defaultActiveKey="all"
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                <Tab
                  eventKey="all"
                  title={<div className="tab-name">전체</div>}
                >
                  <ItemContentTab
                    dataBoxContent={dataBoxContent}
                    dataTableStatisticsCompany={dataTableStatisticsCompany}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    listInverter={listInverter}
                    listStatusCompanySelect={listStatusCompanySelect}
                    paramsSearch={paramsSearch}
                    handleChangeSearch={handleChangeSearch}
                  />
                </Tab>
                <Tab
                  eventKey="coes"
                  title={
                    <div className="tab-name">
                      코에스<span>인버터 ID</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    dataBoxContent={dataBoxContent}
                    dataTableStatisticsCompany={dataTableStatisticsCompany}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    listInverter={listInverter}
                    listStatusCompanySelect={listStatusCompanySelect}
                    paramsSearch={paramsSearch}
                    handleChangeSearch={handleChangeSearch}
                  />
                </Tab>
                <Tab
                  eventKey="SK-Solar"
                  title={
                    <div className="tab-name">
                      에스케이솔라<span>인버터 ID </span>
                    </div>
                  }
                >
                  <ItemContentTab
                    dataBoxContent={dataBoxContent}
                    dataTableStatisticsCompany={dataTableStatisticsCompany}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    listInverter={listInverter}
                    listStatusCompanySelect={listStatusCompanySelect}
                    paramsSearch={paramsSearch}
                    handleChangeSearch={handleChangeSearch}
                  />
                </Tab>
                <div className="opacity d-block pagination mt-0">
                  {totalPage > perPage && (
                    <div className="wrapper-device__pagination mt-0">
                      <Pagination
                        activePage={paramsSearch?.page}
                        itemsCountPerPage={perPage}
                        totalItemsCount={totalPage}
                        pageRangeDisplayed={5}
                        onChange={(e) => handleChangeSearch(e, 'page')}
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

export default OperationStatusPage;
