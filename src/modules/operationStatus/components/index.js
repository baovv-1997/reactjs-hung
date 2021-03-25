// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { TIME_REQUEST } from 'constants/index';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';

import { listMockupType, listParkingLot } from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import ROUTERS from 'constants/routers';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import { useHistory } from 'react-router-dom';
import {
  getListDevice,
  getEventList,
  getDataChart,
  getTrendChart,
  addEventFilter,
  getCardInfo,
} from '../redux';

import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const history = useHistory();

  const { listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );

  const {
    deviceList,
    isProcessing,
    eventList,
    totalEventPage,
    perpageEvent,
    dataChart,
    rawData,
    totalRawData,
    optionFilters,
  } = useSelector((state) => state.operationStatus);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
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
  const [companySelected, setCompanySelected] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
  };

  const [menuTab, setMenuTab] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StatusCompanyAction.getListStatusCompany());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, TIME_REQUEST);
    return () => clearInterval(interval);
  }, []);

  // update init inverter data
  useEffect(() => {
    setCompanySelected(
      listStatusCompanySelect &&
        listStatusCompanySelect[0] &&
        listStatusCompanySelect[0].id
    );
  }, [listStatusCompanySelect]);

  // get list device base company
  useEffect(() => {
    if (companySelected) {
      dispatch(
        getListDevice({
          com_id: companySelected,
        })
      );
    }
  }, [companySelected]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setCompanySelected(item.id);
        setParamsSearch(defaultSearch);
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

  // get data line chart when company, device have change
  useEffect(() => {
    if (companySelected && deviceList.length > 0) {
      const idDevice =
        deviceList && deviceList.length === 1 ? deviceList[0].id : menuTab;
      dispatch(
        getDataChart({
          com_id: companySelected,
          inverter_ids: [idDevice],
        })
      );

      dispatch(
        getCardInfo({
          com_id: companySelected,
          inverter_ids: [idDevice],
        })
      );
    }
  }, [menuTab, companySelected, deviceList, randomNumber]);

  useEffect(() => {
    if (companySelected && deviceList.length > 0) {
      const idDevice =
        deviceList && deviceList.length === 1 ? deviceList[0].id : menuTab;
      dispatch(
        getTrendChart({
          com_id: companySelected,
          inverter_ids: [idDevice],
          page: paramsSearch?.page,
          per_page: paramsSearch?.pagination?.value,
        })
      );
    }
  }, [
    menuTab,
    companySelected,
    paramsSearch?.page,
    paramsSearch?.pagination,
    deviceList,
    randomNumber,
  ]);

  // get event list when inverter, page, perpage have change
  useEffect(() => {
    if (companySelected && deviceList.length > 0) {
      const idDevice =
        deviceList && deviceList.length === 1 ? deviceList[0].id : menuTab;
      dispatch(
        getEventList({
          inverter_id: [idDevice],
          per_page: paramsSearch?.pagination2?.value,
          page: paramsSearch?.page2,
          type: optionFilters,
        })
      );
    }
  }, [
    paramsSearch?.pagination2,
    paramsSearch?.page2,
    menuTab,
    optionFilters,
    companySelected,
    deviceList,
    randomNumber,
  ]);

  //  click vào table bên dưới đến trang chi tiết
  const handleClickDetail = (item) => {
    history.push(`${ROUTERS.OPERATION_STATUS_BY_COMPANY}/${item.id}`);
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
            paramsSearch={{ ...paramsSearch, company: companySelected }}
            listStatusCompanySelect={listStatusCompanySelect}
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
                  deviceList.map((item) => (
                    <Tab
                      eventKey={item.id}
                      title={
                        <div className="tab-name">
                          {item?.ds_name}
                          {item?.ds_name !== '전체' && <span>{item?.id}</span>}
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
                            cumulativePowerGeneration: `${rawItem?.dm_performance_ratio}%`,
                            rateOfPowerGeneration: `${rawItem?.dm_freq}HZ`,
                          }))
                        }
                        optionFilters={optionFilters}
                        handleDownloadTrend={handleDownloadTrend}
                        dataContent={{}}
                        totalPage={totalRawData}
                        perPage={paramsSearch?.pagination?.value}
                        totalPage2={totalEventPage}
                        perPage2={perpageEvent}
                        tableOperationStatusByAreaCompany={
                          eventList &&
                          eventList.length > 0 &&
                          eventList.map((event) => ({
                            id: event?.id,
                            dateTime: moment(event?.created_at).format(
                              'YYYY-MM-DD hh:mm:ss'
                            ),
                            installer: event?.com_name,
                            inverterID: event?.username,
                            installationLocation: event?.pos_name,
                            eventName: event?.evt_type_label,
                            contents: event?.evt_content,
                          }))
                        }
                        activeTab={menuTab}
                        isShowModalSorting={isShowModalSorting}
                        paramsSearch={paramsSearch}
                        handleClickDetail={handleClickDetail}
                        handleChangeSearch={handleChangeSearch}
                        id={item.id}
                        companySelected={companySelected}
                        dataChart={dataChart}
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

export default OperationStatusPage;
