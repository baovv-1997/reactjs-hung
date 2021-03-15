// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import {
  listMockupDataStatusByCompany,
  listParkingLot,
  listMockupType,
} from 'mockData/listCompany';
// import { headStatusCompany } from 'constants/headerTable';
import * as StatusCompanyAction from '../redux';
import ItemContentTab from './ItemContentTab';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';

const StatusByAreaCompany = () => {
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
    power: false,
    performance: false,
    insolation: false,
    pagination: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  const powerData = {
    type: 'power',
    data: [
      { title: '일일 평균 1시간 발전량', value: '60' },
      { title: '일일발전량 달성율', value: '85.2' },
    ],
  };

  const performanceData = {
    type: 'performance',
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

  useEffect(() => {
    dispatch(StatusCompanyAction.getListStatusCompany());
  }, []);

  const dispatch = useDispatch();
  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    // dispatch(StatusCompanyAction.getListStatusCompany(paramsSearch));
    // call api get list
  }, [paramsSearch, dispatch]);

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

      case 'power':
        setParamsSearch({
          ...paramsSearch,
          power: !item,
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
      case 'pagination':
        setParamsSearch({
          ...paramsSearch,
          pagination: item,
        });
        break;
      case 'page':
        setParamsSearch({
          ...paramsSearch,
          page: item,
        });
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
    console.log('download Trend', name);
  };

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={listStatusCompanySelect}
            listMockupType={listMockupType}
          />
          <div className="content-body-left">
            <div className="h-100">
              <Tabs
                defaultActiveKey="bulk"
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                <Tab
                  eventKey="bulk"
                  title={
                    <div className="tab-name">
                      아반시스코리아 <span>전체</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    listMockupDataCompany={listMockupDataStatusByCompany}
                    powerData={powerData}
                    dataContent={{}}
                    handleDownloadTrend={handleDownloadTrend}
                    handleChangeSearch={handleChangeSearch}
                    performanceData={performanceData}
                    insolationData={insolationData}
                    paramsSearch={paramsSearch}
                  />
                </Tab>
                <div className="opacity d-block pagination">
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

export default StatusByAreaCompany;
