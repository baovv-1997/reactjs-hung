// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import Loading from 'commons/components/Loading';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { listParkingLot } from 'mockData/listCompany';
import { getPosList, getListDevice } from 'commons/redux';

import * as SignInAction from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import {
  getStatisticsDevelopRaw,
  getStatisticDevelopChartData,
  getStatisticDevelopCard,
} from '../../redux';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const [menuTab, setMenuTab] = useState('');
  const { listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const { listInverter } = useSelector((state) => state?.account);
  const { posList, isProcessing, deviceList } = useSelector(
    (state) => state?.commons
  );
  const { rawData, totalRawData, cardInfo } = useSelector(
    (state) => state.statisticsDevelop
  );
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    posSelected: posList && posList[1] && posList[1].id,
    page: 1,
    classification: 'minute',
    startDate: new Date() || null,
    endDate: new Date() || null,
    vendorCompany: null,
    inverter: null,
    company: null,
    mockupType: null,
    parkingLot: null,
    insolation: false,
    performance: false,
    generation: false,
    pagination: defaultOption,
    inverter1: menuTab === '' ? null : [deviceList[1]],
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  const dataBoxContent = {
    day: cardInfo?.prod_day,
    month: cardInfo?.prod_month,
    year: cardInfo?.prod_sum,
  };

  const dispatch = useDispatch();

  /**
   * get company list
   */
  const getListCompanyCallback = useCallback(() => {
    dispatch(getPosList());
  }, [dispatch]);

  useEffect(() => {
    getListCompanyCallback();
  }, [getListCompanyCallback]);

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
    getDevicesCallback({ pos_id: paramsSearch?.posSelected });
  }, [getDevicesCallback, paramsSearch?.posSelected]);

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
    getStatisticsDevelopRawCallback({
      inverter_id: menuTab,
      page: paramsSearch?.page,
      per_page: paramsSearch?.pagination?.value,
      pos_id: paramsSearch?.posSelected,
    });
  }, [
    getStatisticsDevelopRawCallback,
    menuTab,
    paramsSearch?.page,
    paramsSearch?.pagination?.value,
    paramsSearch?.posSelected,
  ]);

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
    const inverter1Selected = deviceList.find(
      (item) => item.id === parseInt(eventKey, 10)
    );

    if (eventKey === '') {
      setParamsSearch({ ...defaultSearch, inverter1: null });
    }
    setParamsSearch({ ...defaultSearch, inverter1: inverter1Selected });
  };

  const handleDownloadTrend = (name) => {
    console.log(name, 'download Trend');
  };

  const handleSubmitSearch = () => {
    let from;
    let to;
    if (paramsSearch?.startDate && paramsSearch?.endDate) {
      from = moment(paramsSearch?.startDate).format('YYYY-MM-DD');
      to = moment(paramsSearch?.endDate).format('YYYY-MM-DD');
    } else if (
      paramsSearch?.startDate &&
      !paramsSearch?.endDate &&
      (paramsSearch?.classification === 'minute' ||
        paramsSearch?.classification === 'hour')
    ) {
      from = moment(paramsSearch?.startDate).format('YYYY-MM-DD');
      to = moment(paramsSearch?.startDate).format('YYYY-MM-DD');
    } else if (!paramsSearch?.startDate && !paramsSearch?.endDate) {
      from = moment(new Date()).format('YYYY-MM-DD');
      to = moment(new Date()).format('YYYY-MM-DD');
    } else if (paramsSearch?.startDate && paramsSearch?.endDate) {
      from = moment(paramsSearch?.startDate).format('YYYY-MM-DD');
      to = moment(paramsSearch?.endDate).format('YYYY-MM-DD');
    } else if (
      paramsSearch?.startDate &&
      !paramsSearch?.endDate &&
      (paramsSearch?.classification === 'day' ||
        paramsSearch?.classification === 'month' ||
        paramsSearch?.classification === 'year')
    ) {
      from = moment(paramsSearch?.startDate).format('YYYY-MM-DD');
      to = moment(new Date()).format('YYYY-MM-DD');
    }

    dispatch(
      getStatisticDevelopChartData({
        pos_id: paramsSearch?.posSelected,
        ds_id: paramsSearch?.inverter?.id,
        from,
        to,
        type: paramsSearch?.classification,
        inverter_ids: menuTab === '' ? paramsSearch?.inverter1?.id : menuTab,
        compare_inverter_id: paramsSearch?.inverter?.id,
      })
    );
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
    getStatisticDevelopChartDataCallback({
      pos_id: paramsSearch?.posSelected,
      inverter_ids: menuTab,
    });
  }, [
    getStatisticDevelopChartDataCallback,
    paramsSearch?.posSelected,
    menuTab,
  ]);

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
    getStatisticDevelopCardCallback({
      pos_id: paramsSearch?.posSelected,
      inverter_ids: menuTab,
    });
  }, [getStatisticDevelopCardCallback, paramsSearch?.posSelected, menuTab]);

  return (
    <>
      {isProcessing && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 통계" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={posList.slice(1)}
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
                {deviceList &&
                  deviceList.map((dev) => (
                    <Tab
                      eventKey={dev.id}
                      title={
                        <div className="tab-name">
                          {dev?.label}
                          {dev?.label !== '전체' && <span>{dev?.id}</span>}
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
                            dmProddDay: `${raw?.dm_prod_day}KWH`,
                            dmProddMonth: `${raw?.dm_prod_month}KWH`,
                            dmProdSum: `${raw?.dm_prod_sum}MW`,
                            dmPerformanceRatio: `${raw?.dm_performance_ratio}%`,
                          }))
                        }
                        handleDownloadTrend={handleDownloadTrend}
                        dataContent={{}}
                        totalPage={totalRawData}
                        perPage={paramsSearch?.pagination?.value}
                        listInverter={listInverter}
                        listStatusCompanySelect={listStatusCompanySelect}
                        paramsSearch={paramsSearch}
                        handleChangeSearch={handleChangeSearch}
                        activeTab={menuTab}
                        handleSubmitSearch={handleSubmitSearch}
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

export default OperationStatusPage;
