// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import {
  getCompanyList,
  getListDevice,
  getEventList,
  addEventFilter,
  getPosList,
} from 'commons/redux';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import * as SignInAction from 'modules/accounts/redux';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';
import { getStatisticGeneratorRawData } from '../../redux';

type Props = {
  location: {
    pathname: string,
  },
};
const OperatorStatisticCompany = ({ location }: Props) => {
  const history = useHistory();
  const perPage = 6;
  const totalPage = 100;
  const [menuTab, setMenuTab] = useState('');
  console.log(menuTab, 'menuTab');
  const {
    comList,
    isProcessing,
    deviceList,
    optionFilters,
    eventList,
    totalEventPage,
    posList,
  } = useSelector((state) => state?.commons);
  const { rawData, totalRawData } = useSelector(
    (state) => state.generatorStatistics
  );
  const { listInverter } = useSelector((state) => state?.account);
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    company: comList && comList[1] && comList[1].id,
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
    classification: 'minute',
    startDate: new Date() || null,
    endDate: new Date() || null,
    vendorCompany: null,
    inverter: null,
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
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
   * get company list
   */
  const getPosListCallback = useCallback(
    (params) => {
      dispatch(getPosList(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getPosListCallback({
      id: paramsSearch?.company,
    });
  }, [getPosListCallback, paramsSearch?.company]);

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
   * get raw data list
   */
  const getStatisticGeneratorRawDataCallback = useCallback(
    (params) => {
      dispatch(getStatisticGeneratorRawData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getStatisticGeneratorRawDataCallback({
      com_id: paramsSearch?.company,
      inverter_ids: menuTab,
      page: paramsSearch?.page,
      per_page: paramsSearch?.pagination?.value,
    });
  }, [
    getStatisticGeneratorRawDataCallback,
    paramsSearch?.company,
    menuTab,
    paramsSearch?.pagination,
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
    paramsSearch?.pagination2,
    paramsSearch?.page2,
    optionFilters,
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
        dispatch(
          SignInAction.getListInverter({
            per_page: 0,
            com_id: item?.value,
          })
        );

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
  console.log('paramsSearch', paramsSearch);

  // click to event detail
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
    <MainLayout isProcessing={isProcessing}>
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
                defaultActiveKey={
                  deviceList && deviceList.length > 1
                    ? ''
                    : deviceList && deviceList[0] && deviceList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {posList &&
                  posList.map((pos) => (
                    <Tab
                      eventKey={pos.id}
                      title={
                        <div className="tab-name">
                          {pos?.label}
                          {pos?.label !== '전체' && <span>{pos?.id}</span>}
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
                        totalPage={totalPage}
                        perPage={perPage}
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
                        isShowModalSorting={isShowModalSorting}
                        paramsSearch={paramsSearch}
                        listInverter={listInverter}
                        handleClickDetail={handleClickDetail}
                        handleChangeSearch={handleChangeSearch}
                        optionFilters={optionFilters}
                        // listStatusCompanySelect={listStatusCompanySelect}
                      />
                    </Tab>
                  ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperatorStatisticCompany;
