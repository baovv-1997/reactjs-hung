// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import moment from 'moment';
import TitleHeader from 'commons/components/TitleHeader';
import { listParkingLot, listMockupType } from 'mockData/listCompany';
import { getCompanyList, getListDevice } from 'commons/redux';
import { setCompanyId } from 'modules/main/redux';
import {
  getStatusGeneratorRaw,
  getStatusGeneratorChartData,
  getStatusGeneratorCard,
} from 'modules/statusCompany/redux';

import Loading from 'commons/components/Loading';
import ItemContentTab from './ItemContentTab';

const StatusByAreaCompany = () => {
  const dispatch = useDispatch();
  const [menuTab, setMenuTab] = useState('');

  const { comList, deviceList } = useSelector((state) => state?.commons);

  const {
    totalRawData,
    rawData,
    cardInfo,
    chartData,
    isProcessing,
  } = useSelector((state) => state.statusCompany);
  const { companyId } = useSelector((state) => state?.main);

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
    power: true,
    performance: true,
    insolation: true,
    pagination: defaultOption,
    comName: '',
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

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
      company: companyId || (comList && comList[1] && comList[1].id),
      comName: comList && comList[1] && comList[1].com_name,
    });
  }, [comList]);

  /**
   * get Device list
   */
  const getDevices = useCallback(
    (params) => {
      dispatch(getListDevice(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getDevices({ com_id: paramsSearch?.company });
    }
  }, [getDevices, paramsSearch?.company]);

  /**
   * get raw table data
   */
  const getRawData = useCallback(
    (params) => {
      dispatch(getStatusGeneratorRaw(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getRawData({
        com_id: paramsSearch?.company,
        inverter_id: menuTab,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
      });
    }
  }, [
    getRawData,
    paramsSearch?.company,
    menuTab,
    paramsSearch?.pagination?.value,
    paramsSearch?.page,
  ]);

  /**
   * get chart data
   */
  const getChartDataCallback = useCallback(
    (params) => {
      dispatch(getStatusGeneratorChartData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getChartDataCallback({
        com_id: paramsSearch?.company,
        inverter_id: menuTab,
      });
    }
  }, [getChartDataCallback, paramsSearch?.company, menuTab]);

  /**
   * get status card info
   */
  const getStatusGeneratorCardInfo = useCallback(
    (params) => {
      dispatch(getStatusGeneratorCard(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getStatusGeneratorCardInfo({
        com_id: paramsSearch?.company,
        inverter_id: menuTab,
      });
    }
  }, [getStatusGeneratorCardInfo, paramsSearch?.company, menuTab]);

  // getStatusGeneratorChartData
  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
          company: item.id,
          comName: item.com_name,
        });
        dispatch(setCompanyId({ id: 0 }));
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
    setParamsSearch({ ...defaultSearch, company: paramsSearch?.company });
  };

  const deviceWithtype0 =
    deviceList &&
    deviceList.filter((item) => item.ds_type === '0' || !item?.ds_type);

  return (
    <>
      {isProcessing && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
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
                defaultActiveKey={
                  deviceList && deviceList.length > 1
                    ? ''
                    : deviceList && deviceList[0] && deviceList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {deviceWithtype0 &&
                  deviceWithtype0.map((device) => (
                    <Tab
                      eventKey={device.id}
                      title={
                        <div className="tab-name">
                          {device?.label === '전체'
                            ? `전체(${paramsSearch?.comName})`
                            : device?.id}
                          {device?.label !== '전체' && (
                            <span>{device?.position?.pos_name}</span>
                          )}
                        </div>
                      }
                      key={device.id}
                    >
                      <ItemContentTab
                        chartData={chartData}
                        rawData={
                          rawData &&
                          rawData.map((raw, index) => ({
                            rowId:
                              `${
                                totalRawData -
                                (paramsSearch?.page - 1) *
                                  paramsSearch.pagination.value -
                                index
                              }` || '',
                            dateTime: moment(raw.dm_datetime).format(
                              'YYYY-MM-DD'
                            ),
                            inverterID: raw?.ds_id,
                            installationLocation: raw?.pos_name,
                            inverterName: raw?.ds_name,
                            moduleTemperature: `${raw?.dm_pv_voltage}V`,
                            outsideTemperature: `${raw?.dm_pv_current}A`,
                            horizontalInsolation: `${raw?.dm_o_voltage}V`,
                            gradientInsolation: `${raw?.dm_o_current}A`,
                            powerGeneration: `${raw?.dm_power}KW`,
                            cumulativePowerGeneration: `${raw?.dm_performance_ratio}%`,
                            rateOfPowerGeneration: `${raw?.dm_freq}HZ`,
                          }))
                        }
                        powerData={{
                          type: 'power',
                          data: [
                            {
                              title: '실시간 발전량',
                              value: cardInfo?.avg_prod
                                ? Math.round(cardInfo?.avg_prod * 100) / 100
                                : '',
                            },
                            {
                              title: '실시간 성능비',
                              value: cardInfo?.prod_ratio
                                ? Math.round(cardInfo?.prod_ratio * 100) / 100
                                : '',
                            },
                          ],
                        }}
                        dataContent={{}}
                        handleChangeSearch={handleChangeSearch}
                        performanceData={{
                          type: 'performance',
                          data: [
                            {
                              title: '현재 모듈 온도',
                              value: cardInfo?.module_temp,
                            },
                            {
                              title: '일일 최고 모듈 온도',
                              value: cardInfo?.max_module_temp,
                            },
                          ],
                        }}
                        insolationData={{
                          type: 'insolation',
                          data: [
                            {
                              title: '현재 일사량',
                              value: cardInfo?.current_rad,
                            },
                            {
                              title: '일일 최고 일사량',
                              value: cardInfo?.max_rad,
                            },
                          ],
                        }}
                        paramsSearch={paramsSearch}
                        totalRawData={totalRawData}
                        activeTab={menuTab}
                        id={device?.id}
                      />
                    </Tab>
                  ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusByAreaCompany;
