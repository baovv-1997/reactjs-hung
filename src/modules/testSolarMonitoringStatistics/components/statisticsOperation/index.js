// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { TIME_REQUEST } from 'constants/index';
import * as SignInAction from 'modules/accounts/redux';
import * as CommonAction from 'commons/redux';
import * as ActionGenerator from '../../redux';
import { getEventList } from 'modules/operationStatus/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const { deviceList, comList, optionFilters } = useSelector(
    (state) => state?.commons
  );
  const {
    isProcessing,
    total,
    dataChartOperation,
    listDataTableRawOperation,
    dataCardOperation,
  } = useSelector((state) => state?.testSMStatisticsGenerator);
  const { listInverter } = useSelector((state) => state?.account);
  const [randomNumber, setRandomNumber] = useState(null);
  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '2')) || [];
  const { eventList, totalEventPage } = useSelector(
    (state) => state?.operationStatus
  );
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
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
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

  let toDate =
    (paramsSearch?.startDate &&
      moment(paramsSearch?.startDate).format('YYYY')) ||
    null;
  let fromDate =
    (paramsSearch?.endDate && moment(paramsSearch?.endDate).format('YYYY')) ||
    null;

  if (paramsSearch && paramsSearch.classification === 'year') {
    toDate =
      (paramsSearch?.startDate &&
        moment(paramsSearch?.startDate).format('YYYY')) ||
      null;
    fromDate =
      (paramsSearch?.endDate && moment(paramsSearch?.endDate).format('YYYY')) ||
      null;
  }
  if (paramsSearch && paramsSearch.classification === 'month') {
    toDate =
      (paramsSearch?.startDate &&
        moment(paramsSearch?.startDate).format('YYYY-MM')) ||
      null;
    fromDate =
      (paramsSearch?.endDate &&
        moment(paramsSearch?.endDate).format('YYYY-MM')) ||
      null;
  }

  // call api getCardInformation
  const handleGetCardInformation = useCallback(
    (company) => {
      dispatch(
        ActionGenerator.getCardInformationStatisticsOperation({
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
      dispatch(ActionGenerator.getDataTrendChartStatisticsOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetDataTrendChart({
      inverter_id: paramsSearch?.company,
      type: paramsSearch?.classification || null,
      from: fromDate,
      to: toDate,
      ds_id: paramsSearch?.inverter?.id,
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
      dispatch(ActionGenerator.getDataRawTableOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetDataRawTable({
      inverter_id: paramsSearch?.company,
      type: paramsSearch?.classification || null,
      from: fromDate,
      to: toDate,
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
            per_page: 999999999,
            com_id: item?.value,
            type: '2',
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

  const handleDownloadTrend = (name) => {
    console.log(name, 'download Trend');
  };

  return (
    <MainLayout isProcessing={isProcessing}>
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
              handleDownloadTrend={handleDownloadTrend}
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
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationStatusPage;
