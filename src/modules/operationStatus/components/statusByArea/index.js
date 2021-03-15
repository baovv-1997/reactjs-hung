// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import {
  listMockupType,
  listMockupDataCompany,
  listParkingLot,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import ItemContentTab from './ItemContentTab';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';

const OperationStatusPage = () => {
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
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
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
                    listMockupDataCompany={listMockupDataCompany}
                    dataContent={{}}
                    dataBoxContent={dataBoxContent}
                    handleDownloadTrend={handleDownloadTrend}
                    handleChangeSearch={handleChangeSearch}
                    paramsSearch={paramsSearch}
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
                    listMockupDataCompany={listMockupDataCompany}
                    dataContent={{}}
                    dataBoxContent={dataBoxContent}
                    handleDownloadTrend={handleDownloadTrend}
                    handleChangeSearch={handleChangeSearch}
                    paramsSearch={paramsSearch}
                  />
                </Tab>
                <Tab
                  eventKey="SK-Solar"
                  title={
                    <div className="tab-name">
                      에스케이솔라<span>인버터 ID</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    listMockupDataCompany={listMockupDataCompany}
                    dataContent={{}}
                    dataBoxContent={dataBoxContent}
                    handleDownloadTrend={handleDownloadTrend}
                    handleChangeSearch={handleChangeSearch}
                    paramsSearch={paramsSearch}
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
