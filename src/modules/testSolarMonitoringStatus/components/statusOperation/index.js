// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { dataTableTestMockupStatisticsOfModule } from 'mockData/listCompany';
import { listDataTable2 } from '../data';
import * as CommonAction from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';

const StatusByAreaCompany = () => {
  const perPage = 6;
  const totalPage = 100;
  const perPage2 = 6;
  const totalPage2 = 100;

  const { comList } = useSelector((state) => state?.commons);
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    company: (comList && comList[0]?.id) || null,
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination: defaultOption,
    pagination2: defaultOption,
    page2: 1,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CommonAction.getCompanyList());
  }, []);

  // call api get list
  const getDataListStatusCompany = useCallback(() => {
    console.log('Call api on page');
  }, [
    paramsSearch?.page,
    paramsSearch?.page2,
    paramsSearch?.company,
    paramsSearch?.PVVoltage,
    paramsSearch?.PVCurrent,
    paramsSearch?.outputVoltage,
    paramsSearch?.outputCurrent,
    paramsSearch?.print,
    paramsSearch?.pagination,
    paramsSearch?.pagination2,
    dispatch,
  ]);

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
      case 'PVVoltage':
        setParamsSearch({
          ...paramsSearch,
          PVVoltage: !item,
        });
        break;
      case 'PVCurrent':
        setParamsSearch({
          ...paramsSearch,
          PVCurrent: !item,
        });
        break;
      case 'outputVoltage':
        setParamsSearch({
          ...paramsSearch,
          outputVoltage: !item,
        });
        break;
      case 'print':
        setParamsSearch({
          ...paramsSearch,
          print: !item,
        });
        break;
      case 'outputCurrent':
        setParamsSearch({
          ...paramsSearch,
          outputCurrent: !item,
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
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
        });
        break;
      case 'page2':
        setParamsSearch({
          ...paramsSearch,
          page2: item,
        });
        break;
      default:
        break;
    }
  };

  const handleDownloadTrend = (name) => {
    console.log('download Trend', name);
  };

  return (
    <MainLayout isProcessing={false}>
      <div className="content-wrap">
        <TitleHeader title="테스트(실증단지) 운영 현황" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={comList}
          />
          <div className="content-body-left border-pd-20">
            <div className="h-100">
              <ItemContentTab
                listMockupDataCompany={listDataTable2}
                dataContent={{}}
                dataBoxContent={dataBoxContent}
                handleDownloadTrend={handleDownloadTrend}
                handleChangeSearch={handleChangeSearch}
                tableOperationStatusByAreaCompany={
                  dataTableTestMockupStatisticsOfModule
                }
                paramsSearch={paramsSearch}
                totalPage={totalPage}
                perPage={perPage}
                totalPage2={totalPage2}
                perPage2={perPage2}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusByAreaCompany;
