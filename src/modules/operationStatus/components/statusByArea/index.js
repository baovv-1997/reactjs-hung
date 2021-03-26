// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import { getPosList, getCompanyList } from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';
import { getDataChart, getTrendChart, getCardInfo } from '../../redux';

const OperationStatusPage = () => {
  const [menuTab, setMenuTab] = useState('');

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
    posSelected: posList && posList[1] && posList[1].id,
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
  const dispatch = useDispatch();

  /**
   * get position list list
   */
  const getPosListCallback = useCallback(() => {
    dispatch(getPosList());
  }, [dispatch]);

  useEffect(() => {
    getPosListCallback();
  }, [getPosListCallback]);

  /**
   * get company list list
   */
  const getCompanyListCallback = useCallback(
    (params) => {
      dispatch(getCompanyList(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getCompanyListCallback({
      pos_id: paramsSearch?.posSelected,
    });
  }, [getCompanyListCallback, paramsSearch?.posSelected]);

  /**
   * get trend data chart
   */
  const getTrendChartCallback = useCallback(
    (params) => {
      dispatch(getTrendChart(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getTrendChartCallback({
      com_id: menuTab,
      pos_id: paramsSearch?.posSelected,
      page: paramsSearch?.page,
      per_page: paramsSearch?.pagination?.value,
    });
  }, [
    getTrendChartCallback,
    paramsSearch?.posSelected,
    paramsSearch?.page,
    paramsSearch?.pagination,
    menuTab,
  ]);

  /**
   * get trend data chart
   */
  const getCardInfoCallback = useCallback(
    (params) => {
      dispatch(getCardInfo(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getCardInfoCallback({
      com_id: menuTab,
      pos_id: paramsSearch?.posSelected,
    });
  }, [getCardInfoCallback, paramsSearch?.posSelected, menuTab]);

  /**
   * get  data chart
   */
  const getDataChartCallback = useCallback(
    (params) => {
      dispatch(getDataChart(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getDataChartCallback({
      com_id: menuTab,
      pos_id: paramsSearch?.posSelected,
    });
  }, [getDataChartCallback, paramsSearch?.posSelected, menuTab]);

  // console.log(type, 'type', isProcessing);
  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
          posSelected: item,
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
            listStatusCompanySelect={posList.slice(1)}
            listMockupType={listMockupType}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                defaultActiveKey={
                  comList && comList.length > 1
                    ? ''
                    : comList && comList[0] && comList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {comList.map((item) => (
                  <Tab
                    eventKey={item.id}
                    title={<div className="tab-name">{item?.label}</div>}
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
                        angleOfIncidence: cardInfo?.ds_incidence_angle || null,
                        azimuth: cardInfo?.ds_azimuth_angle || null,
                        moduleOutput: cardInfo?.dm_power || null,
                        moduleColor: cardInfo?.ds_color || null,
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
