// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import { TIME_REQUEST } from 'constants/index';
import * as CommonAction from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import Loading from 'commons/components/Loading';
import * as ActionGenerator from '../../redux';
import ItemContentTab from './ItemContentTab';

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
    isProcessingRaw,
  } = useSelector((state) => state?.testMockupStatistics);
  const [randomNumber, setRandomNumber] = useState(null);
  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
  };
  const defaultSearch = {
    page: 1,
    page2: 1,
    classification: 'minute',
    from: new Date().setDate(new Date().getDate() - 1),
    to: new Date().setDate(new Date().getDate() - 1),
    company: null,
    power: true,
    insolation: true,
    ratio: true,
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
    dispatch(
      CommonAction.getListDevice({
        per_page: 9999999,
        type: '3',
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
    if (paramsSearch?.company) {
      handleGetCardInformation(paramsSearch?.company);
    }
  }, [handleGetCardInformation, paramsSearch?.company, randomNumber]);
  // call api getDataTrend chart
  const handleGetDataTrendChart = useCallback(
    (params) => {
      dispatch(ActionGenerator.getTrendChartTestMKStatisticsGenerator(params));
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
      });
    }
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

  // call api getDataTrend table Mockup
  const handleGetDataRawTableMockup = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataRawTableMockupStatisticGenerator(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataRawTableMockup({
        inverter_id: paramsSearch?.company,
        per_page: paramsSearch?.pagination2?.value,
        page: paramsSearch?.page2,
      });
    }
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
    <>
      {(isProcessing || isProcessingRaw || isLoading) && <Loading />}
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
                label: item?.company?.com_name,
              }))
            }
            subTitle={false}
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
                from:
                  paramsSearch?.classification === 'month'
                    ? moment(paramsSearch?.from).format('YYYY-MM')
                    : moment(paramsSearch?.from).format('YYYY-MM-DD'),
                to:
                  paramsSearch?.classification === 'month'
                    ? moment(paramsSearch?.to).format('YYYY-MM')
                    : moment(paramsSearch?.to).format('YYYY-MM-DD'),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationStatusPage;
