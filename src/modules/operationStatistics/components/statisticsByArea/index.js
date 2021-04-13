// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import TitleHeader from 'commons/components/TitleHeader';
import { getPosList, getCompanyList } from 'commons/redux';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import Loading from 'commons/components/Loading';
import {
  getStatisticOperatorRawData,
  getStatisticOperatorCard,
  getStatisticOperatorChartData,
} from '../../redux';

import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const [menuTab, setMenuTab] = useState('');

  const { posList, comList, isProcessingDetail } = useSelector(
    (state) => state.commons
  );
  const {
    rawData,
    totalRawData,
    cardInfo,
    isProcessing,
    isProcessingRaw,
    chartData,
  } = useSelector((state) => state.operationStatistics);

  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    posSelected: null,
    mockupType: null,
    parkingLot: null,
    PVVoltage: true,
    PVCurrent: true,
    outputVoltage: true,
    outputCurrent: true,
    print: true,
    pagination: defaultOption,
    classification: 'minute',
    startDate: new Date().setDate(new Date().getDate() - 1),
    endDate: new Date().setDate(new Date().getDate() - 1),
    vendorCompany: null,
    inverter: null,
    inverter1: menuTab === '' ? null : [comList[1]],
    posName: '',
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    angleOfIncidence: cardInfo?.ds_azimuth_angle,
    azimuth: cardInfo?.ds_incidence_angle,
    moduleOutput: cardInfo?.dm_power,
    moduleColor: cardInfo?.ds_color,
  };

  const dispatch = useDispatch();

  /**
   * get company list
   */
  const getPosListCallback = useCallback(() => {
    dispatch(getPosList());
  }, [dispatch]);

  useEffect(() => {
    getPosListCallback();
  }, [getPosListCallback]);

  /**
   * get card info data
   */
  const getCardInfoCallback = useCallback(
    (params) => {
      dispatch(getStatisticOperatorCard(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.posSelected) {
      getCardInfoCallback({
        com_id: menuTab,
        pos_id: paramsSearch?.posSelected,
      });
    }
  }, [getCardInfoCallback, menuTab, paramsSearch?.posSelected]);

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
   * get raw data list
   */
  const getStatisticOperatorRawDataCallback = useCallback(
    (params) => {
      dispatch(getStatisticOperatorRawData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.posSelected) {
      getStatisticOperatorRawDataCallback({
        pos_id: paramsSearch?.posSelected,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
        com_id: menuTab,
      });
    }
  }, [
    getStatisticOperatorRawDataCallback,
    paramsSearch?.posSelected,
    menuTab,
    paramsSearch?.pagination,
    paramsSearch?.page,
  ]);

  /**
   * get List data
   */
  const getStatisticOperatorChartDataCallback = useCallback(
    (params) => {
      dispatch(getStatisticOperatorChartData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.posSelected) {
      getStatisticOperatorChartDataCallback({
        pos_id: paramsSearch?.posSelected,
        com_id: menuTab,
      });
    }
  }, [
    getStatisticOperatorChartDataCallback,
    paramsSearch?.posSelected,
    menuTab,
  ]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...defaultSearch,
          posSelected: item.id,
          posName: item?.pos_name,
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
          page: 1,
        });
        break;

      case 'page':
        setParamsSearch({
          ...paramsSearch,
          page: item,
        });
        break;
      case 'classification':
        setParamsSearch({
          ...paramsSearch,
          classification: item,
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
        break;
      case 'inverter1':
        setParamsSearch({
          ...paramsSearch,
          inverter1: item,
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
      getStatisticOperatorChartData({
        pos_id: paramsSearch?.posSelected,
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
        com_compare_id: paramsSearch?.inverter?.id,
      })
    );
  };

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      posSelected: posList && posList[1] && posList[1].id,
      posName: posList && posList[1] && posList[1].pos_name,
    });
  }, [posList]);

  return (
    <>
      {(isProcessingRaw || isProcessing || isProcessingDetail) && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="실증단지 운영 통계" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={posList.slice(1)}
            listMockupType={listMockupType}
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
                            moduleTemperature: `${raw?.dm_pv_voltage}V`,
                            outsideTemperature: `${raw?.dm_pv_current}A`,
                            horizontalInsolation: `${raw?.dm_o_voltage}V`,
                            gradientInsolation: `${raw?.dm_o_current}A`,
                            powerGeneration: `${raw?.dm_power}KW`,
                            cumulativePowerGeneration: `${
                              raw?.dm_power_eff ? raw?.dm_power_eff : 0
                            }%`,
                            rateOfPowerGeneration: `${raw?.dm_freq}HZ`,
                          }))
                        }
                        dataContent={{}}
                        listInverter={comList.slice(1)}
                        paramsSearch={paramsSearch}
                        handleChangeSearch={handleChangeSearch}
                        listStatusCompanySelect={comList.slice(1)}
                        totalPage={totalRawData}
                        perPage={paramsSearch?.pagination?.value}
                        tabActive={menuTab}
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
                        chartData={chartData}
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
