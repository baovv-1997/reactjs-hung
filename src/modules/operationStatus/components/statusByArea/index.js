// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import Loading from 'commons/components/Loading';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import TitleHeader from 'commons/components/TitleHeader';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import { getPosList, getCompanyList } from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';
import { getDataChart, getTrendChart, getCardInfo } from '../../redux';

const OperationStatusPage = () => {
  const { userInfo } = useSelector((state) => state.account);
  const [menuTab, setMenuTab] = useState('');

  const { posList, comList, isProcessingCompany } = useSelector(
    (state) => state?.commons
  );
  const {
    rawData,
    totalRawData,
    cardInfo,
    dataChart,
    isProcessingRaw,
  } = useSelector((operator) => operator?.operationStatus);
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
    PVVoltage: true,
    PVCurrent: true,
    outputVoltage: true,
    outputCurrent: true,
    print: true,
    pagination: defaultOption,
    posName: '',
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dispatch = useDispatch();

  /**
   * get position list list
   */
  const getPosListCallback = useCallback(
    (params) => {
      dispatch(getPosList(params));
    },
    [dispatch]
  );

  useEffect(() => {
    getPosListCallback({
      com_id: userInfo?.com_id ? userInfo?.com_id : '',
      type: '0',
      sort_dir: 'asc',
      sort_by: 'id',
      per_page: 999,
    });
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
    if (paramsSearch?.posSelected) {
      getCompanyListCallback({
        pos_id: paramsSearch?.posSelected,
        type: '0',
        sort_dir: 'asc',
        sort_by: 'id',
        per_page: 999,
      });
    }
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
    if (paramsSearch?.posSelected) {
      getTrendChartCallback({
        com_id: menuTab,
        pos_id: paramsSearch?.posSelected,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
      });
    }
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
    if (paramsSearch?.posSelected) {
      getCardInfoCallback({
        com_id: menuTab,
        pos_id: paramsSearch?.posSelected,
      });
    }
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
    if (paramsSearch?.posSelected) {
      getDataChartCallback({
        com_id: menuTab,
        pos_id: paramsSearch?.posSelected,
      });
    }
  }, [getDataChartCallback, paramsSearch?.posSelected, menuTab]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...defaultSearch,
          posSelected: item.id,
          posName: item.pos_name,
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
          page:
            paramsSearch.page < Math.ceil(totalRawData / item.value)
              ? paramsSearch.page
              : Math.ceil(totalRawData / item.value),
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
    setParamsSearch({
      ...defaultSearch,
      posSelected: paramsSearch?.posSelected,
      posName: paramsSearch?.posName,
    });
  };

  useEffect(() => {
    // if (comList && comList.length === 1) {
    setMenuTab(comList[0]?.id);
    // }
  }, [comList]);

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      posSelected: posList && posList[1] && posList[1].id,
      posName: posList && posList[1] && posList[1].pos_name,
    });
  }, [posList]);

  return (
    <div className="content-wrap">
      <TitleHeader title="실증단지 발전 현황" />
      {isProcessingCompany ? (
        <Loading />
      ) : (
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={posList.slice(1)}
            listMockupType={listMockupType}
            isProcessing={isProcessingCompany}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                defaultActiveKey={comList && comList[0] && comList[0].id}
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
                activeKey={menuTab}
              >
                {comList.map((item) => (
                  <Tab
                    eventKey={item.id}
                    title={
                      <div className="tab-name">
                        {item?.label === '전체'
                          ? paramsSearch?.posName
                          : item?.label}

                        {item?.label === '전체' && <span>전체</span>}
                      </div>
                    }
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
                        angleOfIncidence:
                          (cardInfo?.ds_incidence_angle &&
                            cardInfo?.ds_incidence_angle.toLocaleString(
                              'en'
                            )) ||
                          '0',
                        azimuth:
                          (cardInfo?.ds_azimuth_angle &&
                            cardInfo?.ds_azimuth_angle.toLocaleString('en')) ||
                          '0',
                        moduleOutput:
                          (cardInfo?.dm_power &&
                            cardInfo?.dm_power.toLocaleString('en')) ||
                          '0',
                        moduleColor: cardInfo?.ds_color || null,
                      }}
                      handleChangeSearch={handleChangeSearch}
                      paramsSearch={paramsSearch}
                      activeTab={menuTab}
                      id={item.id}
                      totalPage={totalRawData}
                      chartData={dataChart}
                      isProcessingRaw={isProcessingRaw}
                    />
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationStatusPage;
