// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, memo } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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

import Loading from 'commons/components/Loading';
import ItemContentTab from './ItemContentTab';

const StatusByAreaCompany = () => {
  const [menuTab, setMenuTab] = useState('');

  const { posList, comList, isProcessingPos } = useSelector(
    (state) => state?.commons
  );

  const { userInfo } = useSelector((state) => state.account);

  const {
    totalRawData,
    rawData,
    cardInfo,
    chartData,
    isProcessingRaw,
  } = useSelector((state) => state.statusCompany);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    posSelected: null,
    power: true,
    performance: true,
    insolation: true,
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
      com_id: userInfo && userInfo.com_id ? userInfo.com_id : '',
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
        per_page: 9999999,
        type: '0',
        sort_dir: 'asc',
        sort_by: 'id',
      });
    }
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
    if (paramsSearch?.posSelected) {
      getRawDataCallback({
        com_id: menuTab,
        pos_id: paramsSearch?.posSelected,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
      });
    }
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
    if (paramsSearch?.posSelected) {
      getStatusGeneratorCardInfo({
        pos_id: paramsSearch?.posSelected,
        com_id: menuTab,
      });
    }
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
    if (paramsSearch?.posSelected) {
      getChartDataCallback({
        pos_id: paramsSearch?.posSelected,
        com_id: menuTab,
      });
    }
  }, [getChartDataCallback, paramsSearch?.posSelected, menuTab]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
          posSelected: item.id,
          posName: item.pos_name,
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
    setParamsSearch({
      ...paramsSearch,
      posSelected: posList && posList[1] && posList[1].id,
      posName: posList && posList[1] && posList[1].pos_name,
    });
  }, [posList]);

  useEffect(() => {
    // if (comList && comList.length === 1) {
    //   setMenuTab(comList[0]?.id);
    // }
    setMenuTab(comList[0]?.id);
  }, [comList]);

  return (
    <div className="content-wrap">
      <TitleHeader title="실증단지 발전 현황" />
      {isProcessingPos ? (
        <Loading />
      ) : (
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={posList.slice(1)}
            listMockupType={listMockupType}
            isProcessing={isProcessingPos}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                defaultActiveKey={comList && comList[0] && comList[0].id}
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
                activeKey={menuTab}
              >
                {comList &&
                  comList.map((item) => (
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
                        chartData={chartData}
                        rawData={rawData || []}
                        powerData={{
                          type: 'power',
                          data: [
                            {
                              title: '실시간 발전량',
                              value: cardInfo?.avg_prod
                                ? Math.round(cardInfo?.avg_prod * 100) / 100
                                : '',
                            },
                            {
                              title: '실시간 성능비',
                              value: cardInfo?.prod_ratio
                                ? Math.round(cardInfo?.prod_ratio * 100) / 100
                                : '',
                            },
                          ],
                        }}
                        dataContent={{}}
                        handleChangeSearch={handleChangeSearch}
                        performanceData={{
                          type: 'performance',
                          data: [
                            {
                              title: '현재 모듈 온도',
                              value: cardInfo?.module_temp,
                            },
                            {
                              title: '일일 최고 모듈 온도',
                              value: cardInfo?.max_module_temp,
                            },
                          ],
                        }}
                        insolationData={{
                          type: 'insolation',
                          data: [
                            {
                              title: '현재 일사량',
                              value: cardInfo?.current_rad,
                            },
                            {
                              title: '최고 일사량',
                              value: cardInfo?.max_rad,
                            },
                          ],
                        }}
                        paramsSearch={paramsSearch}
                        totalRawData={totalRawData}
                        activeTab={menuTab}
                        id={item?.id}
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

export default memo<Props>(StatusByAreaCompany);
