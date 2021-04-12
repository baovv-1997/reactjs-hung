// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TIME_REQUEST } from 'constants/index';
import Pagination from 'react-js-pagination';
import TitleHeader from 'commons/components/TitleHeader';
import * as CommonAction from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import Loading from 'commons/components/Loading';
import * as ActionStatusGenerator from '../redux';
import ItemContentTab from './ItemContentTab';

const StatusByAreaCompany = () => {
  const {
    isProcessing,
    dataBox,
    listDataTableRaw,
    total,
    dataChart,
  } = useSelector((state) => state?.testMockupStatus);
  const dispatch = useDispatch();

  const { inverterId } = useSelector((state) => state?.testDashboard);
  const [randomNumber, setRandomNumber] = useState(null);
  const { deviceList } = useSelector((state) => state?.commons);
  // const {companyId}
  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '3')) || [];
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };
  const defaultSearch = {
    page: 1,
    company: inverterId || null,
    mockupType: null,
    parkingLot: null,
    power: true,
    performance: true,
    insolation: true,
    pagination: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, TIME_REQUEST);
    return () => clearInterval(interval);
  }, []);

  const powerData = {
    type: 'power',
    data: [
      {
        title: '실시간 발전량',
        value:
          (dataBox &&
            dataBox?.avg_prod &&
            dataBox?.avg_prod.toLocaleString('en')) ||
          '0',
      },
      {
        title: '실시간 성능비',
        value:
          (dataBox &&
            dataBox?.prod_ratio &&
            dataBox?.prod_ratio.toLocaleString('en')) ||
          '0',
      },
    ],
  };

  const performanceData = {
    type: 'performance',
    data: [
      {
        title: '현재 모듈 온도',
        value:
          (dataBox &&
            dataBox?.max_module_temp &&
            dataBox?.max_module_temp.toLocaleString('en')) ||
          '0',
      },
      {
        title: '일일 최고 모듈 온도',
        value:
          (dataBox &&
            dataBox?.module_temp &&
            dataBox?.module_temp.toLocaleString('en')) ||
          '0',
      },
    ],
  };

  const insolationData = {
    type: 'insolation',
    data: [
      {
        title: '현재 일사량',
        value:
          (dataBox &&
            dataBox?.max_rad &&
            dataBox?.max_rad.toLocaleString('en')) ||
          '0',
      },
      {
        title: '최고 일사량',
        value:
          (dataBox &&
            dataBox?.current_rad &&
            dataBox?.current_rad.toLocaleString('en')) ||
          '0',
      },
    ],
  };

  useEffect(() => {
    dispatch(CommonAction.getListDevice());
  }, []);

  // call api getCardInformation
  const handleGetCardInformation = useCallback(
    (company) => {
      dispatch(
        ActionStatusGenerator.getCardInformationTestMk({
          inverter_id: company,
        })
      );
    },
    [dispatch]
  );
  // call api getDataTrend chart
  const handleGetDataTrendChart = useCallback(
    (params) => {
      dispatch(ActionStatusGenerator.getDataTrendChartTestMk(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetCardInformation(paramsSearch?.company);
      handleGetDataTrendChart({
        inverter_id: paramsSearch?.company,
      });
    }
  }, [handleGetCardInformation, paramsSearch?.company, randomNumber]);

  // call api getDataRawTable
  const handleGetDataRawTable = useCallback(
    (params) => {
      dispatch(ActionStatusGenerator.getDataRawTableTestMk(params));
    },
    [dispatch]
  );

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company:
        listInverterTest && listInverterTest[0] && listInverterTest[0].id,
    });
  }, []);

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataRawTable({
        per_page: paramsSearch?.pagination?.value,
        page: paramsSearch?.page,
        inverter_id: paramsSearch?.company,
      });
    }
  }, [
    handleGetDataRawTable,
    paramsSearch?.page,
    paramsSearch?.pagination?.value,
    randomNumber,
    paramsSearch?.company,
  ]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
          company: item.id,
          page: 1,
        });
        handleGetDataRawTable({
          per_page: paramsSearch?.pagination?.value,
          page: 1,
          inverter_id: item.id,
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
          page: 1,
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

  return (
    <>
      {isProcessing && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="테스트(목업) 발전 현황" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={listInverterTest}
            subTitle={false}
          />
          <div className="content-body-left w-100 border-pd-20">
            <ItemContentTab
              listMockupDataCompany={listDataTableRaw}
              powerData={powerData}
              handleChangeSearch={handleChangeSearch}
              performanceData={performanceData}
              insolationData={insolationData}
              paramsSearch={paramsSearch}
              dataChart={dataChart}
            />
            <div className="opacity d-block pagination">
              {total > paramsSearch?.pagination?.value && (
                <div className="wrapper-device__pagination mt-0">
                  <Pagination
                    activePage={paramsSearch?.page}
                    itemsCountPerPage={paramsSearch?.pagination?.value}
                    totalItemsCount={total}
                    pageRangeDisplayed={5}
                    onChange={(e) => handleChangeSearch(e, 'page')}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusByAreaCompany;
