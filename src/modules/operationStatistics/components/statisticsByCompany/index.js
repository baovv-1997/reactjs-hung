// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import {
  getCompanyList,
  getListDevice,
  getEventList,
  addEventFilter,
} from 'commons/redux';
import { listMockupType, listParkingLot } from 'mockData/listCompany';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import Loading from 'commons/components/Loading';
import ItemContentTab from './ItemContentTab';
import {
  getStatisticOperatorRawData,
  getStatisticOperatorCard,
  getStatisticOperatorChartData,
} from '../../redux';

type Props = {
  location: {
    pathname: string,
  },
};
const OperatorStatisticCompany = ({ location }: Props) => {
  const history = useHistory();
  const [menuTab, setMenuTab] = useState('');
  const {
    comList,
    isProcessingDetail,
    deviceList,
    optionFilters,
    eventList,
    totalEventPage,
    isProcessingCompany,
  } = useSelector((state) => state?.commons);

  const {
    rawData,
    totalRawData,
    cardInfo,
    chartData,
    isProcessingRaw,
  } = useSelector((state) => state?.operationStatistics);
  // const { listInverter } = useSelector((state) => state?.account);
  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    company: null,
    mockupType: null,
    parkingLot: null,
    page2: 1,
    PVVoltage: true,
    PVCurrent: true,
    outputVoltage: true,
    outputCurrent: true,
    print: true,
    pagination: defaultOption,
    pagination2: defaultOption,
    classification: 'minute',
    startDate: new Date().setDate(new Date().getDate() - 1),
    endDate: new Date().setDate(new Date().getDate() - 1),
    vendorCompany: null,
    inverter: null,
    inverter1: menuTab === '' ? null : [deviceList[0]],
    comName: '',
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    angleOfIncidence:
      (cardInfo?.ds_azimuth_angle &&
        cardInfo?.ds_azimuth_angle.toLocaleString('en')) ||
      '0',
    azimuth:
      (cardInfo?.ds_incidence_angle &&
        cardInfo?.ds_incidence_angle.toLocaleString('en')) ||
      '0',
    moduleOutput:
      (cardInfo?.dm_power && cardInfo?.dm_power.toLocaleString('en')) || '0',
    moduleColor: cardInfo?.ds_color,
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
   * get Device list
   */
  const getDevicesCallback = useCallback(
    (params) => {
      dispatch(getListDevice(params));
    },
    [dispatch]
  );
  useEffect(() => {
    if (paramsSearch?.company) {
      getDevicesCallback({
        com_id: paramsSearch?.company,
        per_page: 9999999,
        type: '0',
        sort: ['pos_id|asc', 'id|asc'],
      });
    }
  }, [getDevicesCallback, paramsSearch?.company]);

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
    if (paramsSearch?.company) {
      getStatisticOperatorRawDataCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
        page: paramsSearch?.page,
        per_page: paramsSearch?.pagination?.value,
      });
    }
  }, [
    getStatisticOperatorRawDataCallback,
    paramsSearch?.company,
    menuTab,
    paramsSearch?.pagination,
    paramsSearch?.page,
  ]);

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
    if (paramsSearch?.company) {
      getCardInfoCallback({
        inverter_ids: menuTab,
        com_id: paramsSearch?.company,
      });
    }
  }, [getCardInfoCallback, menuTab, paramsSearch?.company]);

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company:
        comList && comList.length > 1
          ? comList && comList[1] && comList[1].id
          : comList && comList[0] && comList[0].id,
      comName:
        comList && comList.length > 1
          ? comList && comList[1] && comList[1].com_name
          : comList && comList[0] && comList[0].com_name,
    });
  }, [comList]);
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
    if (paramsSearch?.company) {
      getEventListCallback({
        com_id: paramsSearch?.company,
        inverter_id: menuTab,
        page: paramsSearch?.page2,
        per_page: paramsSearch?.pagination2?.value,
        type: optionFilters,
        ds_type: [0],
      });
    }
  }, [
    menuTab,
    paramsSearch?.company,
    getEventListCallback,
    paramsSearch?.pagination2,
    paramsSearch?.page2,
    optionFilters,
  ]);

  // /**
  //  * get Event List data
  //  */
  // const getListInverterCallback = useCallback(
  //   (params) => {
  //     dispatch(getListInverter(params));
  //   },
  //   [dispatch]
  // );

  // useEffect(() => {
  //   getListInverterCallback({
  //     per_page: 9999,
  //     com_id: paramsSearch?.company,
  //   });
  // }, [getListInverterCallback, paramsSearch?.company]);

  /**
   * get Event List data
   */
  const getStatisticOperatorChartDataCallback = useCallback(
    (params) => {
      dispatch(getStatisticOperatorChartData(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      getStatisticOperatorChartDataCallback({
        com_id: paramsSearch?.company,
        inverter_ids: menuTab,
      });
    }
  }, [getStatisticOperatorChartDataCallback, paramsSearch?.company, menuTab]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...defaultSearch,
          company: item.id,
          comName: item?.com_name,
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
          page:
            paramsSearch.page < Math.ceil(totalRawData / item.value)
              ? paramsSearch.page
              : Math.ceil(totalRawData / item.value),
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
          page2:
            paramsSearch.page2 < Math.ceil(totalEventPage / item.value)
              ? paramsSearch.page2
              : Math.ceil(totalEventPage / item.value),
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
      case 'inverter1':
        setParamsSearch({
          ...paramsSearch,
          inverter1: item,
        });
        break;
      default:
        break;
    }
  };

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
    const inverter1Selected = deviceList.find(
      (item) => item.id === parseInt(eventKey, 10)
    );

    if (eventKey === '') {
      setParamsSearch({
        ...defaultSearch,
        inverter1: null,
        company: paramsSearch?.company,
      });
    }
    setParamsSearch({
      ...defaultSearch,
      inverter1: inverter1Selected,
      company: paramsSearch?.company,
      comName: paramsSearch?.comName,
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
        com_id: paramsSearch?.company,
        inverter_ids: paramsSearch?.inverter1?.id,
        from:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.startDate).format('YYYY-MM')
            : moment(paramsSearch?.startDate).format('YYYY-MM-DD'),
        to:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.endDate).format('YYYY-MM')
            : moment(paramsSearch?.endDate).format('YYYY-MM-DD'),
        type: paramsSearch?.classification,
        compare_inverter_id: paramsSearch?.inverter?.id,
      })
    );
  };

  useEffect(() => {
    // if (deviceList && deviceList.length === 1) {
    setMenuTab(deviceList[0]?.id);
    // }
  }, [deviceList]);

  return (
    <div className="content-wrap">
      <TitleHeader title="실증단지 운영 현황" />
      {isProcessingCompany ? (
        <Loading />
      ) : (
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={
              comList && comList.length > 1 ? comList.slice(1) : comList
            }
            listMockupType={listMockupType}
            isProcessing={isProcessingCompany}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                defaultActiveKey={
                  deviceList && deviceList[0] && deviceList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
                activeKey={menuTab}
              >
                {deviceList &&
                  deviceList.map((device) => (
                    <Tab
                      eventKey={device.id}
                      title={
                        <div className="tab-name">
                          {device?.label === '전체'
                            ? paramsSearch?.comName
                            : device?.position?.pos_name}

                          <span>
                            {device?.label === '전체' ? '전체' : device?.id}
                          </span>
                        </div>
                      }
                      key={device.id}
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
                        dataContent={{}}
                        totalPage={totalRawData}
                        perPage={paramsSearch?.pagination?.value}
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
                            inverterID: event?.ds_id,
                            installationLocation: event?.pos_name,
                            eventName: event?.evt_type_label,
                            contents: event?.evt_content,
                            id: event?.id,
                          }))
                        }
                        isShowModalSorting={isShowModalSorting}
                        paramsSearch={paramsSearch}
                        listInverter={
                          deviceList && deviceList.length > 1
                            ? deviceList.slice(1)
                            : deviceList
                        }
                        handleClickDetail={handleClickDetail}
                        handleChangeSearch={handleChangeSearch}
                        optionFilters={optionFilters}
                        listStatusCompanySelect={
                          deviceList && deviceList.length > 1
                            ? deviceList.slice(1)
                            : deviceList
                        }
                        handleSubmitSearch={handleSubmitSearch}
                        tabActive={menuTab}
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
                        id={device.id}
                        isProcessingRaw={isProcessingRaw}
                        isProcessingRawEvent={isProcessingDetail}
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

export default OperatorStatisticCompany;
