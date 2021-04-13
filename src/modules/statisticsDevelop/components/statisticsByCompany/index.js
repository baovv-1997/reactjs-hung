// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import Loading from 'commons/components/Loading';
import { Tabs, Tab } from 'react-bootstrap';
import { getListInverter } from 'modules/accounts/redux';

import { useDispatch, useSelector } from 'react-redux';
// import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import { getCompanyList, getListDevice } from 'commons/redux';

import * as SignInAction from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import {
  getStatisticsDevelopRaw,
  getRadiationRaw,
  getStatisticDevelopChartData,
  getStatisticDevelopCard,
} from '../../redux';

import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const [menuTab, setMenuTab] = useState('');
  const { comList, deviceList } = useSelector((state) => state?.commons);
  const isProcessingCommons = useSelector(
    (state) => state?.commons?.isProcessing
  );
  const {
    rawData,
    totalRawData,
    cardInfo,
    totalRadiationRawData,
    radiationList,
    dataChart,
    isProcessing,
    isProcessingRaw,
  } = useSelector((state) => state.statisticsDevelop);

  const { listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const { listInverter } = useSelector((state) => state?.account);

  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
  };

  const defaultSearch = {
    company: null,
    page: 1,
    classification: 'minute',
    startDate: new Date().setDate(new Date().getDate() - 1),
    endDate: new Date().setDate(new Date().getDate() - 1),
    vendorCompany: null,
    inverter: null,
    mockupType: null,
    parkingLot: null,
    page2: 1,
    insolation: true,
    performance: true,
    generation: true,
    pagination: defaultOption,
    pagination2: defaultOption,
    inverter1: menuTab === '' ? null : [deviceList[1]],
    comName: '',
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    day: (cardInfo?.prod_day && cardInfo?.prod_day.toLocaleString('en')) || '0',
    month:
      (cardInfo?.prod_month && cardInfo?.prod_month.toLocaleString('en')) ||
      '0',
    sum: (cardInfo?.prod_sum && cardInfo?.prod_sum.toLocaleString('en')) || '0',
  };

  const dispatch = useDispatch();

  /**
   * get company list
   */
  const getListCompanyCallback = useCallback(() => {
    dispatch(getCompanyList());
  }, [dispatch]);

  useEffect(() => {
    getListCompanyCallback();
  }, [getListCompanyCallback]);

  /**
   * get Event List data
   */
  const getListInverterCallback = useCallback(
    (params) => {
      dispatch(getListInverter(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getListInverterCallback({
        per_page: 9999,
        com_id: paramsSearch?.company,
      });
    }
  }, [getListInverterCallback, paramsSearch?.company]);

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
      getDevicesCallback({ com_id: paramsSearch?.company, per_page: 9999 });
    }
  }, [getDevicesCallback, paramsSearch?.company]);

  /**
   * get statistics generator data
   */
  const getStatisticsDevelopRawCallback = useCallback(
    (params) => {
      dispatch(getStatisticsDevelopRaw(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getStatisticsDevelopRawCallback({
        inverter_id: menuTab,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
        com_id: paramsSearch?.company,
      });
    }
  }, [
    getStatisticsDevelopRawCallback,
    menuTab,
    paramsSearch?.page,
    paramsSearch?.pagination?.value,
    paramsSearch?.company,
  ]);

  /**
   * get statistics generator data
   */
  const getRadiationRawCallback = useCallback(
    (params) => {
      dispatch(getRadiationRaw(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getRadiationRawCallback({
        inverter_id: menuTab,
        page: paramsSearch?.page2,
        per_page: paramsSearch?.pagination2?.value,
        com_id: paramsSearch?.company,
      });
    }
  }, [
    getRadiationRawCallback,
    menuTab,
    paramsSearch?.page2,
    paramsSearch?.pagination2?.value,
    paramsSearch?.company,
  ]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...defaultSearch,
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
      case 'inverter':
        setParamsSearch({
          ...paramsSearch,
          inverter: item,
        });
        break;
      case 'inverter1':
        setParamsSearch({
          ...paramsSearch,
          inverter1: item,
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
        if (
          paramsSearch?.classification === 'minute' ||
          paramsSearch?.classification === 'hour'
        ) {
          setParamsSearch({
            ...paramsSearch,
            startDate: item,
            endDate: item,
          });
        } else {
          setParamsSearch({
            ...paramsSearch,
            startDate: item,
          });
        }
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

    const inverter1Selected = deviceList.find(
      (item) => item.id === parseInt(eventKey, 10)
    );

    if (eventKey === '') {
      setParamsSearch({
        ...defaultSearch,
        inverter1: null,
        company: paramsSearch?.company,
      });
    }
    setParamsSearch({
      ...defaultSearch,
      inverter1: inverter1Selected,
      company: paramsSearch?.company,
    });
  };

  /**
   * get chart List data
   */
  const getStatisticDevelopChartDataCallback = useCallback(
    (params) => {
      dispatch(getStatisticDevelopChartData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getStatisticDevelopChartDataCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
      });
    }
  }, [getStatisticDevelopChartDataCallback, paramsSearch?.company, menuTab]);

  /**
   * get chart List data
   */
  const getStatisticDevelopCardCallback = useCallback(
    (params) => {
      dispatch(getStatisticDevelopCard(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getStatisticDevelopCardCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
      });
    }
  }, [getStatisticDevelopCardCallback, paramsSearch?.company, menuTab]);

  useEffect(() => {
    switch (paramsSearch?.classification) {
      case 'minute':
        setParamsSearch({
          ...paramsSearch,
          startDate: new Date().setDate(new Date().getDate() - 1),
          endDate: new Date().setDate(new Date().getDate() - 1),
        });
        break;
      case 'hour':
        setParamsSearch({
          ...paramsSearch,
          startDate: new Date().setDate(new Date().getDate() - 1),
          endDate: new Date().setDate(new Date().getDate() - 1),
        });
        break;
      case 'day':
        setParamsSearch({
          ...paramsSearch,
          startDate: new Date().setDate(new Date().getDate() - 7),
          endDate: new Date().setDate(new Date().getDate() - 1),
        });
        break;
      case 'month':
        setParamsSearch({
          ...paramsSearch,
          startDate: new Date().setDate(new Date().getDate() - 366),
          endDate: new Date().setDate(new Date().getDate() - 1),
        });
        break;

      default:
        break;
    }
  }, [paramsSearch?.classification]);

  const handleSubmitSearch = () => {
    dispatch(
      getStatisticDevelopChartData({
        com_id: paramsSearch?.company,
        from:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.startDate).format('YYYY-MM')
            : moment(paramsSearch?.startDate).format('YYYY-MM-DD'),
        to:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.endDate).format('YYYY-MM')
            : moment(paramsSearch?.endDate).format('YYYY-MM-DD'),
        type: paramsSearch?.classification,
        inverter_ids: paramsSearch?.inverter?.id,
        compare_inverter_id: paramsSearch?.inverter1?.id,
      })
    );
  };

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company: comList && comList[1] && comList[1].id,
      comName: comList && comList[1] && comList[1].com_name,
    });
  }, [comList]);

  const deviceWithtype0 =
    deviceList &&
    deviceList.filter((item) => item.ds_type === '0' || !item?.ds_type);
  return (
    <>
      {(isProcessingRaw || isProcessing || isProcessingCommons) && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 통계" />
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
              <div className="h-100">
                <Tabs
                  defaultActiveKey=""
                  className="list-order tab-list"
                  onSelect={(eventKey) => onSelect(eventKey)}
                >
                  {deviceWithtype0 &&
                    deviceWithtype0.map((dev) => (
                      <Tab
                        eventKey={dev.id}
                        title={
                          <div className="tab-name">
                            {dev?.label === '전체'
                              ? `전체(${paramsSearch?.comName})`
                              : dev?.id}
                            {dev?.label !== '전체' && (
                              <span>{dev?.position?.pos_name}</span>
                            )}
                          </div>
                        }
                      >
                        <ItemContentTab
                          dataBoxContent={dataBoxContent}
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
                                'YYYY-MM-DD hh:mm:ss'
                              ),
                              companyName: raw?.com_name || '',
                              inverterID: raw?.ds_id || '',
                              inverterName: raw?.ds_name || '',
                              installationLocation: raw?.pos_name || '',
                              dmProddDay:
                                raw?.dm_prod_day &&
                                `${raw?.dm_prod_day.toLocaleString('en')}KWH`,
                              dmProddMonth:
                                raw?.dm_prod_month &&
                                `${raw?.dm_prod_month.toLocaleString('en')}KWH`,
                              dmProdSum:
                                raw?.dm_prod_sum &&
                                `${raw?.dm_prod_sum.toLocaleString('en')}MW`,
                              dmPerformanceRatio: `${raw?.dm_performance_ratio}%`,
                            }))
                          }
                          dataContent={{}}
                          totalPage={totalRawData}
                          perPage={paramsSearch?.pagination?.value}
                          totalPage2={totalRadiationRawData}
                          perPage2={paramsSearch?.pagination2?.value}
                          dataTableStatisticsOfModuleCompany={
                            radiationList &&
                            radiationList.map((radiation, index) => ({
                              rowId:
                                `${
                                  totalRadiationRawData -
                                  (paramsSearch?.page2 - 1) *
                                    paramsSearch.pagination2.value -
                                  index
                                }` || '',
                              dateTime: moment(radiation.dm_datetime).format(
                                'YYYY-MM-DD hh:mm:ss'
                              ),
                              companyName: radiation?.com_name || '',
                              inverterID: radiation?.ds_id || '',
                              inverterName: radiation?.ds_name || '',
                              installationLocation: radiation?.pos_name || '',
                              dmModuleTemp: `${radiation?.dm_module_temp}℃`,
                              dmEnvTemp: `${radiation?.dm_env_temp}℃`,
                              dmRad: `${radiation?.dm_rad}W/㎡`,
                            }))
                          }
                          listInverter={listInverter}
                          listStatusCompanySelect={listStatusCompanySelect}
                          paramsSearch={paramsSearch}
                          handleChangeSearch={handleChangeSearch}
                          activeTab={menuTab}
                          handleSubmitSearch={handleSubmitSearch}
                          dateTime={{
                            from:
                              paramsSearch?.classification === 'month'
                                ? moment(paramsSearch?.startDate).format(
                                    'YYYY-MM'
                                  )
                                : moment(paramsSearch?.startDate).format(
                                    'YYYY-MM-DD'
                                  ),
                            to:
                              paramsSearch?.classification === 'month'
                                ? moment(paramsSearch?.endDate).format(
                                    'YYYY-MM'
                                  )
                                : moment(paramsSearch?.startDate).format(
                                    'YYYY-MM-DD'
                                  ),
                          }}
                          id={dev?.id}
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
    </>
  );
};

export default OperationStatusPage;
