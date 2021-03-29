// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import {
  listMockupType,
  dataTableStatisticsCompany,
  dataTableStatisticsOfModuleCompany,
  listParkingLot,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import * as SignInAction from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  // const history = useHistory();
  const perPage = 6;
  const totalPage = 100;
  const perPage2 = 6;
  const totalPage2 = 100;
  const [menuTab, setMenuTab] = useState('bulk');
  console.log(menuTab, 'menuTab');
  const { listStatusCompanySelect } = useSelector(
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
    page2: 1,
    insolation: false,
    performance: false,
    generation: false,
    pagination: defaultOption,
    pagination2: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    day: '300',
    month: '9,000',
    year: '300',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StatusCompanyAction.getListStatusCompany());
  }, []);

  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    console.log('Call api on page');
  }, [
    paramsSearch?.page,
    paramsSearch?.page2,
    paramsSearch?.company,
    paramsSearch?.mockupType,
    paramsSearch?.parkingLot,
    paramsSearch?.insolation,
    paramsSearch?.generation,
    paramsSearch?.pagination,
    paramsSearch?.pagination2,
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
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
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
      case 'page2':
        setParamsSearch({
          ...paramsSearch,
          page2: item,
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

  return (
    // <MainLayout isProcessing={isProcessing}>
    <div className="content-wrap">
      <TitleHeader title="실증단지 발전 통계" />
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
                    아반시스 코리아 <span>전체</span>
                  </div>
                }
              >
                <ItemContentTab
                  dataBoxContent={dataBoxContent}
                  dataTableStatisticsCompany={dataTableStatisticsCompany}
                  handleDownloadTrend={handleDownloadTrend}
                  dataContent={{}}
                  totalPage={totalPage}
                  perPage={perPage}
                  totalPage2={totalPage2}
                  perPage2={perPage2}
                  dataTableStatisticsOfModuleCompany={
                    dataTableStatisticsOfModuleCompany
                  }
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
                    인버터 ID <span>본관 남측</span>
                  </div>
                }
              >
                <ItemContentTab
                  dataBoxContent={dataBoxContent}
                  dataTableStatisticsCompany={dataTableStatisticsCompany}
                  handleDownloadTrend={handleDownloadTrend}
                  dataContent={{}}
                  totalPage={totalPage}
                  perPage={perPage}
                  totalPage2={totalPage2}
                  perPage2={perPage2}
                  dataTableStatisticsOfModuleCompany={
                    dataTableStatisticsOfModuleCompany
                  }
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
                    인버터 ID <span>본관 동측</span>
                  </div>
                }
              >
                <ItemContentTab
                  dataBoxContent={dataBoxContent}
                  dataTableStatisticsCompany={dataTableStatisticsCompany}
                  handleDownloadTrend={handleDownloadTrend}
                  dataContent={{}}
                  totalPage={totalPage}
                  perPage={perPage}
                  totalPage2={totalPage2}
                  perPage2={perPage2}
                  dataTableStatisticsOfModuleCompany={
                    dataTableStatisticsOfModuleCompany
                  }
                  listInverter={listInverter}
                  listStatusCompanySelect={listStatusCompanySelect}
                  paramsSearch={paramsSearch}
                  handleChangeSearch={handleChangeSearch}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default OperationStatusPage;
