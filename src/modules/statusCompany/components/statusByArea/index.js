// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import { getPosList, getCompanyList } from 'commons/redux';
import { listParkingLot, listMockupType } from 'mockData/listCompany';
import {
  getStatusGeneratorRaw,
  getStatusGeneratorChartData,
  getStatusGeneratorCard,
} from 'modules/statusCompany/redux';

import ItemContentTab from './ItemContentTab';

const StatusByAreaCompany = () => {
  const [menuTab, setMenuTab] = useState('');

  const { posList, comList } = useSelector((state) => state?.commons);

  const { totalRawData, rawData, cardInfo, chartData } = useSelector(
    (state) => state.statusCompany
  );
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    posSelected: posList && posList[0] && posList[0].id,
    power: false,
    performance: false,
    insolation: false,
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
   * get raw table data
   */
  const getRawDataCallback = useCallback(
    (params) => {
      dispatch(getStatusGeneratorRaw(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getRawDataCallback({
      com_id: menuTab,
      pos_id: paramsSearch?.posSelected,
      page: paramsSearch?.page,
      per_page: paramsSearch?.pagination?.value,
    });
  }, [
    getRawDataCallback,
    paramsSearch?.posSelected,
    menuTab,
    paramsSearch?.pagination?.value,
    paramsSearch?.page,
  ]);

  /**
   * get status card info
   */
  const getStatusGeneratorCardInfo = useCallback(
    (params) => {
      dispatch(getStatusGeneratorCard(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getStatusGeneratorCardInfo({
      pos_id: paramsSearch?.posSelected,
      com_id: menuTab,
    });
  }, [getStatusGeneratorCardInfo, paramsSearch?.posSelected, menuTab]);

  /**
   * get chart data
   */
  const getChartDataCallback = useCallback(
    (params) => {
      dispatch(getStatusGeneratorChartData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getChartDataCallback({
      pos_id: paramsSearch?.posSelected,
      com_id: menuTab,
    });
  }, [getChartDataCallback, paramsSearch?.posSelected, menuTab]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
          posSelected: item.id,
        });
        break;

      case 'power':
        setParamsSearch({
          ...paramsSearch,
          power: !item,
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
    setParamsSearch({ ...defaultSearch });
  };

  const handleDownloadTrend = (name) => {
    console.log('download Trend', name);
  };

  return (
    // <MainLayout isProcessing={isProcessing}>
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
        <div className="content-body-left">
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
              {comList &&
                comList.map((item) => (
                  <Tab
                    eventKey={item.id}
                    title={<div className="tab-name">{item?.label}</div>}
                  >
                    <ItemContentTab
                      chartData={chartData}
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
                            'YYYY-MM-DD'
                          ),
                          inverterID: raw?.ds_id,
                          installationLocation: raw?.pos_name,
                          inverterName: raw?.ds_name,
                          moduleTemperature: `${raw?.dm_pv_voltage}V`,
                          outsideTemperature: `${raw?.dm_pv_current}A`,
                          horizontalInsolation: `${raw?.dm_o_voltage}V`,
                          gradientInsolation: `${raw?.dm_o_current}A`,
                          powerGeneration: `${raw?.dm_power}KW`,
                          cumulativePowerGeneration: `${raw?.dm_performance_ratio}%`,
                          rateOfPowerGeneration: `${raw?.dm_freq}HZ`,
                        }))
                      }
                      powerData={{
                        type: 'power',
                        data: [
                          {
                            title: '일일 평균 1시간 발전량',
                            value: cardInfo?.avg_prod
                              ? Math.round(cardInfo?.avg_prod * 100) / 100
                              : '',
                          },
                          {
                            title: '일일발전량 달성율',
                            value: cardInfo?.prod_ratio
                              ? Math.round(cardInfo?.prod_ratio * 100) / 100
                              : '',
                          },
                        ],
                      }}
                      dataContent={{}}
                      handleDownloadTrend={handleDownloadTrend}
                      handleChangeSearch={handleChangeSearch}
                      performanceData={{
                        type: 'performance',
                        data: [
                          {
                            title: '현재 모듈 온도',
                            value: cardInfo?.module_temp,
                          },
                          {
                            title: '최고 모듈 온도',
                            value: cardInfo?.max_module_temp,
                          },
                        ],
                      }}
                      insolationData={{
                        type: 'insolation',
                        data: [
                          {
                            title: '수평 일사량',
                            value: cardInfo?.current_rad,
                          },
                          { title: '경사 일사량', value: cardInfo?.max_rad },
                        ],
                      }}
                      paramsSearch={paramsSearch}
                      totalRawData={totalRawData}
                      activeTab={menuTab}
                      id={item?.id}
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

export default StatusByAreaCompany;
