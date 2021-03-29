// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import Loading from 'commons/components/Loading';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// import { TIME_REQUEST } from 'constants/index';
// import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import {
  getCompanyList,
  getListDevice,
  getEventList,
  addEventFilter,
} from 'commons/redux';

import { listMockupType, listParkingLot } from 'mockData/listCompany';

import ROUTERS from 'constants/routers';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import { useHistory } from 'react-router-dom';
import { getDataChart, getTrendChart, getCardInfo } from '../redux';

import ItemContentTab from './ItemContentTab';

type Props = {
  location: {
    pathname: string,
  },
};
const OperationStatusPage = ({ location }: Props) => {
  const history = useHistory();

  const { dataChart, rawData, totalRawData, cardInfo } = useSelector(
    (state) => state.operationStatus
  );
  console.log('cardInfo', cardInfo);
  const {
    eventList,
    comList,
    isProcessing,
    deviceList,
    totalEventPage,
    optionFilters,
  } = useSelector((state) => state?.commons);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    company: comList && comList[1] && comList[1].id,
    page: 1,
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

  // const [randomNumber, setRandomNumber] = useState(null);
  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
  };

  const [menuTab, setMenuTab] = useState('');

  const dispatch = useDispatch();

  /**
   * get company list
   */
  const getListCompany = useCallback(() => {
    dispatch(getCompanyList());
  }, [dispatch]);

  useEffect(() => {
    getListCompany();
  }, [getListCompany]);

  /**
   * get Device list
   */
  const getDevicesCallback = useCallback(
    (params) => {
      dispatch(getListDevice(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getDevicesCallback({ com_id: paramsSearch?.company });
  }, [getDevicesCallback, paramsSearch?.company]);

  /**
   * get status card info
   */
  const getCardInfoCallback = useCallback(
    (params) => {
      dispatch(getCardInfo(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getCardInfoCallback({
      com_id: paramsSearch?.company,
      inverter_id: menuTab,
    });
  }, [getCardInfoCallback, paramsSearch?.company, menuTab]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRandomNumber(Math.random());
  //   }, TIME_REQUEST);
  //   return () => clearInterval(interval);
  // }, []);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({ ...defaultSearch, company: item });
        setMenuTab('');

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
      case 'modal':
        setIsShowModalSorting(!isShowModalSorting);
        break;
      case 'checkBox':
        dispatch(addEventFilter(item));
        setIsShowModalSorting(false);
        break;
      default:
        break;
    }
  };

  /**
   * get chart data
   */
  const getDataChartCallback = useCallback(
    (params) => {
      dispatch(getDataChart(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getDataChartCallback({
      com_id: paramsSearch?.company,
      inverter_ids: menuTab,
    });
  }, [menuTab, paramsSearch?.company, getDataChartCallback]);

  /**
   * get trend chart data
   */
  const getTrendChartCallback = useCallback(
    (params) => {
      dispatch(getTrendChart(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getTrendChartCallback({
      com_id: paramsSearch?.company,
      inverter_ids: menuTab,
      page: paramsSearch?.page,
      per_page: paramsSearch?.pagination?.value,
    });
  }, [
    menuTab,
    paramsSearch?.company,
    getTrendChartCallback,
    // randomNumber,
    paramsSearch?.page,
    paramsSearch?.pagination?.value,
  ]);

  /**
   * get Event List data
   */
  const getEventListCallback = useCallback(
    (params) => {
      dispatch(getEventList(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getEventListCallback({
      com_id: paramsSearch?.company,
      inverter_ids: menuTab,
      page: paramsSearch?.page2,
      per_page: paramsSearch?.pagination2?.value,
      type: optionFilters,
    });
  }, [
    menuTab,
    paramsSearch?.company,
    getEventListCallback,
    // randomNumber,
    paramsSearch?.pagination2,
    paramsSearch?.page2,
    optionFilters,
  ]);

  //  click vào table bên dưới đến trang chi tiết
  const handleClickDetail = (item) => {
    history.push({
      pathname: `${ROUTERS.EVENT}/detail/${item.id}`,
      state: { prevRoute: location.pathname },
    });
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
    <div>
      {isProcessing && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="실증단지 운영 현황" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={comList.slice(1)}
            listMockupType={listMockupType}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                // set active tab
                defaultActiveKey={
                  deviceList && deviceList.length > 1
                    ? ''
                    : deviceList && deviceList[0] && deviceList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {deviceList &&
                  deviceList.length > 0 &&
                  deviceList.map((device) => (
                    <Tab
                      eventKey={device.id}
                      title={
                        <div className="tab-name">
                          {device?.label}
                          {device?.label !== '전체' && (
                            <span>{device?.id}</span>
                          )}
                        </div>
                      }
                    >
                      <ItemContentTab
                        dataBoxContent={dataBoxContent}
                        listMockupDataCompany={
                          rawData &&
                          rawData.map((rawItem, index) => ({
                            rowId:
                              `${
                                totalRawData -
                                (paramsSearch?.page - 1) *
                                  paramsSearch.pagination.value -
                                index
                              }` || '',

                            dateTime: moment(rawItem?.dm_datetime).format(
                              'YYYY-MM-DD hh:mm:ss'
                            ),
                            installer: rawItem?.com_name,
                            inverterID: rawItem?.ds_id,
                            installationLocation: rawItem?.pos_name,
                            inverterName: rawItem?.ds_name,
                            moduleTemperature: `${rawItem?.dm_pv_voltage}V`,
                            outsideTemperature: `${rawItem?.dm_pv_current}A`,
                            horizontalInsolation: `${rawItem?.dm_o_voltage}V`,
                            gradientInsolation: `${rawItem?.dm_o_current}A`,
                            powerGeneration: `${rawItem?.dm_power}KW`,
                            cumulativePowerGeneration: `${rawItem?.dm_power_eff}%`,
                            rateOfPowerGeneration: `${rawItem?.dm_freq}HZ`,
                          }))
                        }
                        optionFilters={optionFilters}
                        handleDownloadTrend={handleDownloadTrend}
                        dataContent={{}}
                        totalPage={totalRawData}
                        perPage={paramsSearch?.pagination?.value}
                        totalPage2={totalEventPage}
                        perPage2={paramsSearch?.pagination?.value}
                        tableOperationStatusByAreaCompany={
                          eventList &&
                          eventList.length > 0 &&
                          eventList.map((event) => ({
                            no: event?.no,
                            dateTime: moment(event?.created_at).format(
                              'YYYY-MM-DD hh:mm:ss'
                            ),
                            installer: event?.com_name,
                            inverterID: event?.username,
                            installationLocation: event?.pos_name,
                            eventName: event?.evt_type_label,
                            contents: event?.evt_content,
                            id: event?.id,
                          }))
                        }
                        activeTab={menuTab}
                        isShowModalSorting={isShowModalSorting}
                        paramsSearch={paramsSearch}
                        handleClickDetail={handleClickDetail}
                        handleChangeSearch={handleChangeSearch}
                        id={device.id}
                        dataChart={dataChart}
                      />
                    </Tab>
                  ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default OperationStatusPage;
