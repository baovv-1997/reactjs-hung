// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import {
  listMockupType,
  listMockupDataCompany,
  tableOperationStatusByAreaCompany,
  listParkingLot,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import ROUTERS from 'constants/routers';
import { useHistory } from 'react-router-dom';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const history = useHistory();
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

  const defaultSearch = {
    page: 1,
    company: null,
    mockupType: null,
    parkingLot: null,
    page2: 1,
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination1: defaultOption,
    pagination2: defaultOption,
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    day: '300',
    month: '9,000',
    year: '300',
    plus: '10.8',
  };

  const dispatch = useDispatch();
  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    dispatch(StatusCompanyAction.getListStatusCompany(paramsSearch));
  }, [paramsSearch, dispatch]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

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
      case 'PVCurrent':
        setParamsSearch({
          ...paramsSearch,
          PVCurrent: !item,
        });
        break;
      case 'outputCurrent':
        setParamsSearch({
          ...paramsSearch,
          outputCurrent: !item,
        });
        break;
      case 'print':
        setParamsSearch({
          ...paramsSearch,
          print: !item,
        });
        break;
      case 'PVVoltage':
        setParamsSearch({
          ...paramsSearch,
          PVVoltage: !item,
        });
        break;
      case 'outputVoltage':
        setParamsSearch({
          ...paramsSearch,
          outputVoltage: !item,
        });
        break;
      case 'pagination1':
        setParamsSearch({
          ...paramsSearch,
          pagination1: item,
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
        });
        break;
      case 'page1':
        setParamsSearch({
          ...paramsSearch,
          page1: item,
        });
        break;
      case 'page2':
        setParamsSearch({
          ...paramsSearch,
          page2: item,
        });
        break;
      case 'modal':
        setIsShowModalSorting(!isShowModalSorting);
        break;
      case 'checkBox':
        console.log(item, 'optionCheck', name);
        setIsShowModalSorting(false);
        break;
      default:
        break;
    }
  };

  //  click vào table bên dưới đến trang chi tiết
  const handleClickDetail = (item) => {
    history.push(`${ROUTERS.OPERATION_STATUS_BY_COMPANY}/${item.id}`);
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
          <div className="content-body-left w-100">
            <div>
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
                    listMockupDataCompany={listMockupDataCompany}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    totalPage={totalPage}
                    perPage={perPage}
                    tableOperationStatusByAreaCompany={
                      tableOperationStatusByAreaCompany
                    }
                    isShowModalSorting={isShowModalSorting}
                    paramsSearch={paramsSearch}
                    handleClickDetail={handleClickDetail}
                    handleChangeSearch={handleChangeSearch}
                  />
                </Tab>
                <Tab
                  eventKey="coes"
                  title={
                    <div className="tab-name">
                      코에스 <span>인버터 ID</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    dataBoxContent={dataBoxContent}
                    listMockupDataCompany={listMockupDataCompany}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    totalPage={totalPage}
                    perPage={perPage}
                    tableOperationStatusByAreaCompany={
                      tableOperationStatusByAreaCompany
                    }
                    isShowModalSorting={isShowModalSorting}
                    paramsSearch={paramsSearch}
                    handleClickDetail={handleClickDetail}
                    handleChangeSearch={handleChangeSearch}
                  />
                </Tab>
                <Tab
                  eventKey="SK-Solar"
                  title={
                    <div className="tab-name">
                      에스케이솔라 <span>인버터 ID</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    dataBoxContent={dataBoxContent}
                    listMockupDataCompany={listMockupDataCompany}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    totalPage={totalPage}
                    perPage={perPage}
                    tableOperationStatusByAreaCompany={
                      tableOperationStatusByAreaCompany
                    }
                    isShowModalSorting={isShowModalSorting}
                    paramsSearch={paramsSearch}
                    handleClickDetail={handleClickDetail}
                    handleChangeSearch={handleChangeSearch}
                  />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationStatusPage;
