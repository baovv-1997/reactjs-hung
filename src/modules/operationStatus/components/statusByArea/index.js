// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { listMockupType, listParkingLot } from 'mockData/listCompany';

import { getPosList, getCompanyList } from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';
import {
  getListDevice,
  getEventList,
  getDataChart,
  getTrendChart,
  getCardInfo,
} from '../../redux';

const OperationStatusPage = () => {
  const [menuTab, setMenuTab] = useState('');
  console.log(menuTab, 'menuTab');
  const { isProcessing, posList, comList } = useSelector(
    (state) => state?.commons
  );
  const { rawData, totalRawData, cardInfo, dataChart } = useSelector(
    (operator) => operator.operationStatus
  );
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    company: 1,
    mockupType: null,
    parkingLot: null,
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const [posSelected, setPosSelected] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosList());
  }, []);

  // update init inverter data
  useEffect(() => {
    setPosSelected(posList && posList[0] && posList[0].id);
    setParamsSearch({
      ...paramsSearch,
      company: posList && posList[0] && posList[0].id,
    });
  }, [posList]);

  useEffect(() => {
    if (posSelected) {
      dispatch(
        getCompanyList({
          pos_id: posSelected,
        })
      );
    }
  }, [posSelected]);

  useEffect(() => {
    if (posSelected && comList.length > 0) {
      const idComInit =
        comList && comList.length === 1 ? comList[0].id : menuTab;
      dispatch(
        getTrendChart({
          com_id: idComInit,
          page: paramsSearch?.page,
          per_page: paramsSearch?.pagination?.value,
        })
      );
    }
  }, [menuTab, posSelected, paramsSearch?.page, paramsSearch?.pagination]);

  useEffect(() => {
    if (posSelected && comList.length > 0) {
      const idComInit =
        comList && comList.length === 1 ? comList[0].id : menuTab;
      dispatch(
        getCardInfo({
          com_id: idComInit,
          pos_id: posSelected,
        })
      );
    }
  }, [posSelected, menuTab]);

  // get data line chart when company, device have change
  useEffect(() => {
    if (posSelected && comList.length > 0) {
      const idComInit =
        comList && comList.length === 1 ? comList[0].id : menuTab;
      dispatch(
        getDataChart({
          com_id: idComInit,
          pos_id: posSelected,
        })
      );
    }
  }, [menuTab, posSelected]);

  // console.log(type, 'type', isProcessing);
  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setPosSelected(item.id);
        setParamsSearch({
          ...paramsSearch,
          company: item.id,
        });
        setMenuTab(1);
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
    console.log('download Trend', name);
  };

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={posList.map((pos) => ({
              id: pos.id,
              label: pos.pos_name,
            }))}
            listMockupType={listMockupType}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                defaultActiveKey={
                  posList && posList.length > 1
                    ? ''
                    : posList && posList[0] && posList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {comList.map((item) => (
                  <Tab
                    eventKey={item.id}
                    title={<div className="tab-name">{item?.com_name}</div>}
                  >
                    <ItemContentTab
                      rawData={rawData.map((rawItem, index) => ({
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
                      }))}
                      dataBoxContent={{
                        angleOfIncidence: `${cardInfo?.current_rad}`,
                        azimuth: `${cardInfo?.avg_prod}`,
                        moduleOutput: `${cardInfo?.module_temp}`,
                        moduleColor: `${cardInfo?.max_module_temp}`,
                      }}
                      handleDownloadTrend={handleDownloadTrend}
                      handleChangeSearch={handleChangeSearch}
                      paramsSearch={paramsSearch}
                      activeTab={menuTab}
                      id={item.id}
                      totalPage={totalRawData}
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
