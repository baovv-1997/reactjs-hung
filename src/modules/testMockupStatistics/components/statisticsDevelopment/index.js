// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import { TIME_REQUEST } from 'constants/index';
import * as CommonAction from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import * as ActionGenerator from '../../redux';
import ItemContentTab from './ItemContentTab';
import Loading from 'commons/components/Loading';

const OperationStatusPage = () => {
  const { deviceList } = useSelector((state) => state?.commons);
  const isLoading = useSelector((state) => state?.commons?.isProcessing);
  const {
    isProcessing,
    dataBoxCard,
    dataChart,
    listDataTableRaw,
    listDataTableRawMockup,
    total,
    totalMockup,
  } = useSelector((state) => state?.testMockupStatistics);
  const [randomNumber, setRandomNumber] = useState(null);
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };
  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '3')) || [];

  const defaultSearch = {
    page: 1,
    page2: 1,
    classification: 'minute',
    startDate: null,
    endDate: null,
    company:
      (listInverterTest && listInverterTest[0] && listInverterTest[0].id) ||
      null,
    power: false,
    insolation: false,
    ratio: false,
    pagination: defaultOption,
    pagination2: defaultOption,
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
        ActionGenerator.getCardTestMKStatisticsGenerator({
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
      dispatch(ActionGenerator.getTrendChartTestMKStatisticsGenerator(params));
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
    paramsSearch?.isSubmitSearch,
    paramsSearch?.company,
    randomNumber,
  ]);

  // call api getDataTrend table
  const handleGetDataRawTable = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataTestMKRawTableGenerator(params));
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

  // call api getDataTrend table Mockup
  const handleGetDataRawTableMockup = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataRawTableMockupStatisticGenerator(params));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetDataRawTableMockup({
      inverter_id: paramsSearch?.company,
      per_page: paramsSearch?.pagination2?.value,
      page: paramsSearch?.page2,
    });
  }, [
    handleGetDataRawTableMockup,
    paramsSearch?.company,
    paramsSearch?.pagination2?.value,
    paramsSearch?.page2,
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
      case 'power':
        setParamsSearch({
          ...paramsSearch,
          power: !item,
        });
        break;
      case 'insolation':
        setParamsSearch({
          ...paramsSearch,
          insolation: !item,
        });
        break;
      case 'ratio':
        setParamsSearch({
          ...paramsSearch,
          ratio: !item,
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

  return (
    <>
      {(isProcessing || isLoading) && <Loading />}
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
              totalPage={total}
              perPage={paramsSearch?.pagination?.value}
              paramsSearch={paramsSearch}
              dataChart={dataChart}
              handleChangeSearch={handleChangeSearch}
              totalPage2={totalMockup}
              perPage2={paramsSearch?.pagination2?.value}
              dataTableBottom={listDataTableRawMockup || []}
              timeDate={{
                from,
                to,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationStatusPage;
