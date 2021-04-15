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

const OperationStatusPage = () => {
  const { deviceList, isProcessing } = useSelector((state) => state?.commons);
  const {
    dataBoxCard,
    dataChart,
    listDataTableRaw,
    total,
    isProcessingRaw,
  } = useSelector((state) => state?.testSMStatisticsGenerator);

  const [randomNumber, setRandomNumber] = useState(null);
  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    classification: 'minute',
    from: new Date().setDate(new Date().getDate() - 1),
    to: new Date().setDate(new Date().getDate() - 1),
    company: null,
    insolation: true,
    performance: true,
    generation: true,
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
    sum:
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
    switch (paramsSearch?.classification) {
      case 'minute':
        setParamsSearch({
          ...paramsSearch,
          from: new Date().setDate(new Date().getDate() - 1),
          to: new Date().setDate(new Date().getDate() - 1),
        });
        break;
      case 'hour':
        setParamsSearch({
          ...paramsSearch,
          from: new Date().setDate(new Date().getDate() - 1),
          to: new Date().setDate(new Date().getDate() - 1),
        });
        break;
      case 'day':
        setParamsSearch({
          ...paramsSearch,
          from: new Date().setDate(new Date().getDate() - 7),
          to: new Date().setDate(new Date().getDate() - 1),
        });
        break;
      case 'month':
        setParamsSearch({
          ...paramsSearch,
          from: new Date().setDate(new Date().getDate() - 366),
          to: new Date().setDate(new Date().getDate() - 1),
        });
        break;

      default:
        break;
    }
  }, [paramsSearch?.classification]);

  useEffect(() => {
    dispatch(
      CommonAction.getListDevice({
        per_page: 9999999,
        type: '2',
      })
    );
    dispatch(CommonAction.getCompanyList());
  }, []);

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company:
        (deviceList &&
          deviceList.slice(1) &&
          deviceList.slice(1)[0] &&
          deviceList.slice(1)[0].id) ||
        null,
    });
  }, [deviceList]);
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
    if (paramsSearch?.company) {
      handleGetCardInformation(paramsSearch?.company);
    }
  }, [handleGetCardInformation, paramsSearch?.company, randomNumber]);
  // call api getDataTrend chart
  const handleGetDataTrendChart = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataTrendChartStatisticsGenerator(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataTrendChart({
        inverter_id: paramsSearch?.company,
        type: paramsSearch?.classification || null,
        from:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.from).format('YYYY-MM')
            : moment(paramsSearch?.from).format('YYYY-MM-DD'),
        to:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.to).format('YYYY-MM')
            : moment(paramsSearch?.to).format('YYYY-MM-DD'),
        compare_inverter_id: paramsSearch?.inverter?.id,
      });
    }
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
    if (paramsSearch?.company) {
      handleGetDataRawTable({
        inverter_id: paramsSearch?.company,
        type: paramsSearch?.classification || null,
        from:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.from).format('YYYY-MM')
            : moment(paramsSearch?.from).format('YYYY-MM-DD'),
        to:
          paramsSearch?.classification === 'month'
            ? moment(paramsSearch?.to).format('YYYY-MM')
            : moment(paramsSearch?.to).format('YYYY-MM-DD'),
        per_page: paramsSearch?.pagination?.value,
        page: paramsSearch?.page,
      });
    }
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
          from: new Date(),
          to: new Date(),
        });
        break;
      case 'pagination':
        setParamsSearch({
          ...paramsSearch,
          pagination: item,
          page: 1,
        });
        break;
      case 'page':
        setParamsSearch({
          ...paramsSearch,
          page: item,
        });
        break;

      case 'from':
        setParamsSearch({
          ...paramsSearch,
          from: item,
        });
        break;
      case 'to':
        setParamsSearch({
          ...paramsSearch,
          to: item,
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
    <div className="content-wrap">
      <TitleHeader title="테스트(실증단지) 발전 통계" />
      <div className="content-body page-company">
        <GroupSelectSidebar
          handleChangeSearch={handleChangeSearch}
          paramsSearch={paramsSearch}
          listStatusCompanySelect={
            deviceList &&
            deviceList.slice(1).map((item) => ({
              id: item?.id,
              label: item?.company.com_name,
            }))
          }
          subTitle={false}
          isProcessing={isProcessing}
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
            timeDate={{
              from:
                paramsSearch?.classification === 'month'
                  ? moment(paramsSearch?.from).format('YYYY-MM')
                  : moment(paramsSearch?.from).format('YYYY-MM-DD'),
              to:
                paramsSearch?.classification === 'month'
                  ? moment(paramsSearch?.to).format('YYYY-MM')
                  : moment(paramsSearch?.to).format('YYYY-MM-DD'),
            }}
            isProcessingRaw={isProcessingRaw}
          />
        </div>
      </div>
    </div>
  );
};

export default OperationStatusPage;
