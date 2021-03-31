// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import TitleHeader from 'commons/components/TitleHeader';
import { TIME_REQUEST } from 'constants/index';
import * as CommonAction from 'commons/redux';
import { getEventList } from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import * as ActionGenerator from '../../redux';
import ItemContentTab from './ItemContentTab';
import Loading from 'commons/components/Loading';

const OperationStatusPage = () => {
  const {
    deviceList,
    comList,
    optionFilters,
    eventList,
    totalEventPage,
  } = useSelector((state) => state?.commons);
  const {
    isProcessing,
    total,
    dataChartOperation,
    listDataTableRawOperation,
    dataCardOperation,
  } = useSelector((state) => state?.testMockupStatistics);
  const { listInverter } = useSelector((state) => state?.account);
  const isLoading = useSelector((state) => state?.commons?.isProcessing);
  const [randomNumber, setRandomNumber] = useState(null);
  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '3')) || [];

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    company:
      (listInverterTest && listInverterTest[0] && listInverterTest[0].id) ||
      null,
    page2: 1,
    ACVoltage: true,
    ACCurrent: true,
    ACPower: true,
    pagination: defaultOption,
    pagination2: defaultOption,
    classification: 'minute',
    startDate: null,
    endDate: null,
    vendorCompany: null,
    inverter: null,
    isSubmitSearch: false,
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  const dataBoxContent = {
    angleOfIncidence:
      (dataCardOperation?.incidence_angle &&
        dataCardOperation?.incidence_angle.toLocaleString('en')) ||
      '0',
    azimuth:
      (dataCardOperation?.azimuth_angle &&
        dataCardOperation?.azimuth_angle.toLocaleString('en')) ||
      '0',
    moduleOutput:
      (dataCardOperation?.power &&
        dataCardOperation?.power.toLocaleString('en')) ||
      '0',
    moduleColor: dataCardOperation?.color,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CommonAction.getListDevice());
    dispatch(CommonAction.getCompanyList());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, TIME_REQUEST);
    return () => clearInterval(interval);
  }, []);

  let from = null;
  let to = null;

  switch (paramsSearch?.classification) {
    case 'minute':
    case 'hour':
    case 'day':
      from = paramsSearch?.startDate
        ? moment(paramsSearch?.startDate).format('YYYY-MM-DD')
        : null;
      to = paramsSearch?.endDate
        ? moment(paramsSearch?.endDate).format('YYYY-MM-DD')
        : null;
      break;
    case 'month':
      from = paramsSearch?.startDate
        ? moment(paramsSearch?.startDate).format('YYYY-MM')
        : null;
      to = paramsSearch?.endDate
        ? moment(paramsSearch?.endDate).format('YYYY-MM')
        : null;
      break;
    default:
      break;
  }

  // call api getCardInformation
  const handleGetCardInformation = useCallback(
    (company) => {
      dispatch(
        ActionGenerator.getCardTestMKStatisticsOperation({
          inverter_id: company,
        })
      );
    },
    [dispatch]
  );
  useEffect(() => {
    handleGetCardInformation(paramsSearch?.company);
  }, [handleGetCardInformation, paramsSearch?.company, randomNumber]);
  // call api getDataTrend chart
  const handleGetDataTrendChart = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataChartTestMKStatisticsOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetDataTrendChart({
      inverter_id: paramsSearch?.company,
      type: paramsSearch?.classification || null,
      from,
      to,
    });
  }, [
    handleGetDataTrendChart,
    paramsSearch?.company,
    randomNumber,
    paramsSearch?.isSubmitSearch,
  ]);

  // call api getDataTrend table
  const handleGetDataRawTable = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataRawTestMKStatisticOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetDataRawTable({
      inverter_id: paramsSearch?.company,
      type: paramsSearch?.classification || null,
      from,
      to,
      per_page: paramsSearch?.pagination?.value,
      page: paramsSearch?.page,
    });
  }, [
    handleGetDataRawTable,
    paramsSearch?.company,
    paramsSearch?.pagination?.value,
    paramsSearch?.page,
    randomNumber,
    paramsSearch?.isSubmitSearch,
  ]);

  // get event list when inverter, page, perpage have change
  useEffect(() => {
    dispatch(
      getEventList({
        inverter_id: paramsSearch?.company || null,
        per_page: paramsSearch?.pagination2?.value,
        page: paramsSearch?.page2,
        type: optionFilters,
      })
    );
  }, [
    paramsSearch?.pagination2,
    paramsSearch?.page2,
    paramsSearch?.company,
    optionFilters,
    randomNumber,
  ]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...defaultSearch,
          company: item.id,
        });
        break;
      case 'ACVoltage':
        setParamsSearch({
          ...paramsSearch,
          ACVoltage: !item,
        });
        break;
      case 'ACCurrent':
        setParamsSearch({
          ...paramsSearch,
          ACCurrent: !item,
        });
        break;
      case 'ACPower':
        setParamsSearch({
          ...paramsSearch,
          ACPower: !item,
        });
        break;
      case 'pagination':
        setParamsSearch({
          ...paramsSearch,
          pagination: item,
          page: 1,
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
          page2: 1,
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
        dispatch(CommonAction.addEventFilter(item));
        setIsShowModalSorting(false);
        break;
      case 'classification':
        setParamsSearch({
          ...paramsSearch,
          classification: item,
          startDate: null,
          endDate: null,
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
      case 'isSubmitSearch':
        setParamsSearch({
          ...paramsSearch,
          isSubmitSearch: item,
          page: 1,
          page2: 1,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {(isProcessing || isLoading) && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="테스트(실증단지) 운영 통계" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={listInverterTest}
          />
          <div className="content-body-left w-100 border-pd-20">
            <ItemContentTab
              dataBoxContent={dataBoxContent}
              listMockupDataCompany={listDataTableRawOperation}
              totalPage={total}
              perPage={paramsSearch?.pagination?.value}
              totalPage2={totalEventPage}
              perPage2={paramsSearch?.pagination2?.value}
              dataTableBottom={eventList}
              isShowModalSorting={isShowModalSorting}
              paramsSearch={paramsSearch}
              listInverter={listInverter}
              dataChartOperation={dataChartOperation}
              optionFilters={optionFilters}
              handleChangeSearch={handleChangeSearch}
              listStatusCompanySelect={comList && comList.slice(1)}
              timeDate={{ from, to }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationStatusPage;
