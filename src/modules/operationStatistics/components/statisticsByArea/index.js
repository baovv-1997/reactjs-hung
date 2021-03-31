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

  const { posList, comList } = useSelector((state) => state.commons);
  const { rawData, totalRawData, cardInfo, isProcessing } = useSelector(
    (state) => state.operationStatistics
  );

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    posSelected: null,
    mockupType: null,
    parkingLot: null,
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination: defaultOption,
    classification: 'minute',
    startDate: null,
    endDate: null,
    vendorCompany: null,
    inverter: null,
    inverter1: menuTab === '' ? null : [comList[1]],
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

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      posSelected: posList && posList[1] && posList[1].id,
    });
  }, []);

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
    });
  };

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

  const handleSubmitSearch = () => {
    dispatch(
      getStatisticOperatorChartData({
        pos_id: paramsSearch?.posSelected,
        com_id: paramsSearch?.inverter1?.id,
        from,
        to,
        type: paramsSearch?.classification,
        com_compare_id: paramsSearch?.inverter?.id,
      })
    );
  };

  return (
    <>
      {isProcessing && <Loading />}
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
                          {com?.label}
                          {com?.label !== '전체' && <span>{com?.id}</span>}
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
                          from,
                          to,
                        }}
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
