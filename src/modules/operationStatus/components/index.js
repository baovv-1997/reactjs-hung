// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';

import {
  listMockupType,
  listMockupDataCompany,
  tableOperationStatusByAreaCompany,
  listParkingLot,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import ROUTERS from 'constants/routers';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
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
    pagination: defaultOption,
    pagination2: defaultOption,
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
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

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 운영 현황" />
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
                  title={
                    <div className="tab-name">
                      아반시스코리아<span>전체</span>
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
                  eventKey="coes"
                  title={
                    <div className="tab-name">
                      인버터 ID <span>본관 남측</span>
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
                      인버터 ID<span>본관 동측</span>
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
