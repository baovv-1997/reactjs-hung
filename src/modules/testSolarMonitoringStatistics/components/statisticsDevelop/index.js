// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { TIME_REQUEST } from 'constants/index';
import * as SignInAction from 'modules/accounts/redux';
import * as CommonAction from 'commons/redux';
import * as ActionGenerator from '../../redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const { deviceList, comList } = useSelector((state) => state?.commons);
  const {
    isProcessing,
    dataBoxCard,
    dataChart,
    listDataTableRaw,
    total,
  } = useSelector((state) => state?.testSMStatisticsGenerator);
  const { listInverter } = useSelector((state) => state?.account);
  const [randomNumber, setRandomNumber] = useState(null);
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };
  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '2')) || [];

  const defaultSearch = {
    page: 1,
    classification: 'minute',
    startDate: null,
    endDate: null,
    vendorCompany: null,
    inverter: null,
    company: (deviceList && deviceList[1].id) || null,
    insolation: false,
    performance: false,
    generation: false,
    pagination: defaultOption,
    isSubmitSearch: false,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    day:
      (dataBoxCard &&
        dataBoxCard.prod_day &&
        dataBoxCard.prod_day.toLocaleString('en')) ||
      0,
    month:
      (dataBoxCard &&
        dataBoxCard.prod_month &&
        dataBoxCard.prod_month.toLocaleString('en')) ||
      0,
    year:
      (dataBoxCard &&
        dataBoxCard.prod_sum &&
        dataBoxCard.prod_sum.toLocaleString('en')) ||
      0,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, TIME_REQUEST);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(CommonAction.getListDevice());
    dispatch(CommonAction.getCompanyList());
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
        ActionGenerator.getCardInformationStatisticsGenerator({
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
      dispatch(ActionGenerator.getDataTrendChartStatisticsGenerator(params));
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
      dispatch(ActionGenerator.getDataRawTableGenerator(params));
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

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...defaultSearch,
          company: item.id,
        });
        break;
      case 'generation':
        setParamsSearch({
          ...paramsSearch,
          generation: !item,
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
      case 'classification':
        setParamsSearch({
          ...paramsSearch,
          classification: item,
          startDate: null,
          endDate: null,
        });
        break;
      case 'pagination':
        setParamsSearch({
          ...paramsSearch,
          pagination: item,
          page: 1,
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
      case 'page':
        setParamsSearch({
          ...paramsSearch,
          page: item,
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
        <TitleHeader title="테스트(실증단지) 발전 통계" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={listInverterTest}
          />
          <div className="content-body-left w-100 border-pd-20">
            <ItemContentTab
              dataBoxContent={dataBoxContent}
              dataTableStatisticsCompany={listDataTableRaw}
              handleDownloadTrend={handleDownloadTrend}
              totalPage={total}
              listStatusCompanySelect={comList && comList.slice(1)}
              perPage={paramsSearch?.pagination?.value}
              listInverter={listInverter}
              paramsSearch={paramsSearch}
              dataChart={dataChart}
              handleChangeSearch={handleChangeSearch}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationStatusPage;
