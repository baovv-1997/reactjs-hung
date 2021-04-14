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

  const {
    eventList,
    comList,
    isProcessing,
    deviceList,
    totalEventPage,
    isProcessingDetail,
    optionFilters,
  } = useSelector((state) => state?.commons);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    company: null,
    page: 1,
    mockupType: null,
    parkingLot: null,
    page2: 1,
    PVVoltage: true,
    PVCurrent: true,
    outputVoltage: true,
    outputCurrent: true,
    print: true,
    pagination: defaultOption,
    pagination2: defaultOption,
    comName: '',
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  // const [randomNumber, setRandomNumber] = useState(null);
  const dataBoxContent = {
    angleOfIncidence: cardInfo?.ds_incidence_angle,
    azimuth: cardInfo?.ds_azimuth_angle,
    moduleOutput: cardInfo?.dm_power,
    moduleColor: cardInfo?.ds_color,
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

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company: comList && comList[1] && comList[1].id,
      comName: comList && comList[1] && comList[1].com_name,
    });
  }, [comList]);

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
    if (paramsSearch?.company) {
      getDevicesCallback({ com_id: paramsSearch?.company });
    }
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
    if (paramsSearch?.company) {
      getCardInfoCallback({
        com_id: paramsSearch?.company,
        inverter_id: menuTab,
      });
    }
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
        setParamsSearch({
          ...defaultSearch,
          company: item.id,
          comName: item?.com_name,
        });
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
          page: 1,
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
          page2: 1,
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
    if (paramsSearch?.company) {
      getDataChartCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
      });
    }
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
    if (paramsSearch?.company) {
      getTrendChartCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
      });
    }
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
    if (paramsSearch?.company) {
      getEventListCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
        page: paramsSearch?.page2,
        per_page: paramsSearch?.pagination2?.value,
        type: optionFilters,
      });
    }
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
    setParamsSearch({
      ...defaultSearch,
      company: paramsSearch?.company,
      comName: paramsSearch?.comName,
    });
  };
  const deviceWithtype0 =
    deviceList &&
    deviceList.filter((item) => item.ds_type === '0' || !item?.ds_type);
  return (
    <div>
      {(isProcessing || isProcessingDetail) && <Loading />}
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
                defaultActiveKey={deviceWithtype0 && deviceWithtype0[0]}
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {deviceWithtype0 &&
                  deviceWithtype0.length > 0 &&
                  deviceWithtype0.map((device) => (
                    <Tab
                      eventKey={device.id}
                      title={
                        <div className="tab-name">
                          {device?.label === '전체'
                            ? paramsSearch?.comName
                            : device?.id}

                          <span>
                            {device?.label === '전체'
                              ? '전체'
                              : device?.position?.pos_name}
                          </span>
                        </div>
                      }
                      key={device.id}
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
                            moduleTemperature:
                              rawItem?.dm_pv_voltage &&
                              `${
                                rawItem?.dm_pv_voltage.toLocaleString('en') ||
                                '0'
                              }V`,
                            outsideTemperature:
                              rawItem?.dm_pv_current &&
                              `${
                                rawItem?.dm_pv_current.toLocaleString('en') ||
                                '0'
                              }A`,
                            horizontalInsolation:
                              rawItem?.dm_o_voltage &&
                              `${
                                rawItem?.dm_o_voltage.toLocaleString('en') ||
                                '0'
                              }V`,
                            gradientInsolation:
                              rawItem?.dm_o_current &&
                              `${
                                rawItem?.dm_o_current.toLocaleString('en') ||
                                '0'
                              }A`,
                            powerGeneration:
                              rawItem?.dm_power &&
                              `${
                                rawItem?.dm_power.toLocaleString('en') || '0'
                              }KW`,
                            cumulativePowerGeneration: `${rawItem?.dm_performance_ratio}%`,
                            rateOfPowerGeneration:
                              rawItem?.dm_rad &&
                              `${
                                rawItem?.dm_rad.toLocaleString('en') || '0'
                              }HZ`,
                          }))
                        }
                        optionFilters={optionFilters}
                        dataContent={{}}
                        totalPage={totalRawData}
                        perPage={paramsSearch?.pagination?.value}
                        totalPage2={totalEventPage}
                        perPage2={paramsSearch?.pagination2?.value}
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
                        chartData={dataChart}
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
