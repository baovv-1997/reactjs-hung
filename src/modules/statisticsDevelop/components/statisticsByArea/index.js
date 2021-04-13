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
import { getPosList, getCompanyList } from 'commons/redux';
import { getListInverter } from 'modules/accounts/redux';
import * as SignInAction from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import {
  getStatisticsDevelopRaw,
  getStatisticDevelopChartData,
  getStatisticDevelopCard,
} from '../../redux';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const { userInfo } = useSelector((state) => state.account);
  const [menuTab, setMenuTab] = useState('');
  const { listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );

  const { posList, comList } = useSelector((state) => state?.commons);
  const isProcessingCommons = useSelector(
    (state) => state?.commons?.isProcessing
  );
  const {
    rawData,
    totalRawData,
    cardInfo,
    dataChart,
    isProcessing,
    isProcessingRaw,
  } = useSelector((state) => state?.statisticsDevelop);

  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
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
    insolation: true,
    performance: true,
    generation: true,
    pagination: defaultOption,
    inverter1: menuTab === '' ? null : [comList[1]],
    posName: '',
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
  const getListCompanyCallback = useCallback(
    (params) => {
      dispatch(getPosList(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getListCompanyCallback({
      com_id: userInfo?.com_id ? userInfo?.com_id : '',
    });
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
        pos_id: paramsSearch?.posSelected,
      });
    }
  }, [getListInverterCallback, paramsSearch?.posSelected]);

  /**
   * get Device list
   */
  const getCompanyListCallback = useCallback(
    (params) => {
      dispatch(getCompanyList(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.posSelected) {
      getCompanyListCallback({ pos_id: paramsSearch?.posSelected });
    }
  }, [getCompanyListCallback, paramsSearch?.posSelected]);

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
    if (paramsSearch?.posSelected) {
      getStatisticsDevelopRawCallback({
        com_id: menuTab,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
        pos_id: paramsSearch?.posSelected,
      });
    }
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
          ...defaultSearch,
          posSelected: item.id,
          posName: item.pos_name,
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
    const inverter1Selected = comList.find(
      (item) => item.id === parseInt(eventKey, 10)
    );

    if (eventKey === '') {
      setParamsSearch({
        ...defaultSearch,
        inverter1: null,
        posSelected: paramsSearch?.posSelected,
      });
    }
    setParamsSearch({
      ...defaultSearch,
      inverter1: inverter1Selected,
      posSelected: paramsSearch?.posSelected,
      posName: paramsSearch?.posName,
    });
  };

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
        pos_id: paramsSearch?.posSelected,
        ds_id: paramsSearch?.inverter?.id,
        com_id: paramsSearch?.inverter1?.id,
        from:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.startDate).format('YYYY-MM')
            : moment(paramsSearch?.startDate).format('YYYY-MM-DD'),
        to:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.endDate).format('YYYY-MM')
            : moment(paramsSearch?.endDate).format('YYYY-MM-DD'),
        type: paramsSearch?.classification,
        com_compare_id: paramsSearch?.inverter1?.id,
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
    if (paramsSearch?.posSelected) {
      getStatisticDevelopChartDataCallback({
        pos_id: paramsSearch?.posSelected,
        inverter_ids: menuTab,
      });
    }
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
    if (paramsSearch?.posSelected) {
      getStatisticDevelopCardCallback({
        pos_id: paramsSearch?.posSelected,
        inverter_ids: menuTab,
      });
    }
  }, [getStatisticDevelopCardCallback, paramsSearch?.posSelected, menuTab]);

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      posSelected: posList && posList[1] && posList[1].id,
      posName: posList && posList[1] && posList[1].pos_name,
    });
  }, [posList]);

  return (
    <>
      {(isProcessingCommons || isProcessing || isProcessingRaw) && <Loading />}
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
                defaultActiveKey=""
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {comList &&
                  comList.map((com) => (
                    <Tab
                      eventKey={com.id}
                      title={
                        <div className="tab-name">
                          {com?.label === '전체'
                            ? paramsSearch?.posName
                            : com?.label}

                          {com?.label === '전체' && <span>전체</span>}
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
                                  paramsSearch?.pagination?.value -
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
                        listInverter={comList.slice(1)}
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
                              ? moment(paramsSearch?.endDate).format('YYYY-MM')
                              : moment(paramsSearch?.startDate).format(
                                  'YYYY-MM-DD'
                                ),
                        }}
                        chartData={dataChart}
                        id={com.id}
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
