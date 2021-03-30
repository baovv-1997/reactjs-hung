// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import TitleHeader from 'commons/components/TitleHeader';
import { getPosList, getListDevice, getCompanyList } from 'commons/redux';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import { getListInverter } from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import {
  getStatisticOperatorRawData,
  getStatisticOperatorCard,
} from '../../redux';

import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const [menuTab, setMenuTab] = useState('');

  const { listInverter } = useSelector((state) => state?.account);
  const { posList, deviceList, comList } = useSelector(
    (state) => state.commons
  );
  const { rawData, totalRawData, cardInfo } = useSelector(
    (state) => state.operationStatistics
  );

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    posSelected: posList && posList[1] && posList[1].id,
    mockupType: null,
    parkingLot: null,
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination: defaultOption,
    classification: 'minute',
    startDate: new Date() || null,
    endDate: new Date() || null,
    vendorCompany: null,
    inverter: null,
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
    getCardInfoCallback({
      inverter_ids: menuTab,
    });
  }, [getCardInfoCallback, menuTab]);

  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    //  Call api
  }, [paramsSearch, dispatch]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

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
    getListInverterCallback({
      com_id: paramsSearch?.vendorCompany?.id,
      per_page: 9999,
    });
  }, [paramsSearch?.vendorCompany, getListInverterCallback]);

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
    getStatisticOperatorRawDataCallback({
      pos_id: paramsSearch?.posSelected,
      inverter_ids: menuTab,
      page: paramsSearch?.page,
      per_page: paramsSearch?.pagination?.value,
    });
  }, [
    getStatisticOperatorRawDataCallback,
    paramsSearch?.posSelected,
    menuTab,
    paramsSearch?.pagination,
    paramsSearch?.page,
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
    setParamsSearch(defaultSearch);
  };

  const handleDownloadTrend = (name) => {
    console.log(name, 'download Trend');
  };

  return (
    // <MainLayout isProcessing={isProcessing}>
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
                      handleDownloadTrend={handleDownloadTrend}
                      dataContent={{}}
                      listInverter={listInverter}
                      paramsSearch={paramsSearch}
                      handleChangeSearch={handleChangeSearch}
                      listStatusCompanySelect={comList.slice(1)}
                      totalPage={totalRawData}
                      perPage={paramsSearch?.pagination?.value}
                    />
                  </Tab>
                ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default OperationStatusPage;
