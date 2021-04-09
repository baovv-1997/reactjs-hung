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
  const {
    isProcessing,
    dataBoxCard,
    dataChart,
    listDataTableRaw,
    total,
  } = useSelector((state) => state?.testSMStatisticsGenerator);

  const [randomNumber, setRandomNumber] = useState(null);
  const defaultOption = {
    id: 1,
    value: 5,
    label: '5 개씩 보기',
  };
  const listInverterTest =
    (deviceList && deviceList.filter((item) => item.ds_type === '2')) || [];

  const defaultSearch = {
    page: 1,
    classification: 'minute',
    from: new Date(),
    to: new Date(),
    company:
      (listInverterTest && listInverterTest[0] && listInverterTest[0].id) ||
      null,
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

  let from = null;
  let to = null;
  const date = new Date();

  switch (paramsSearch?.classification) {
    case 'month':
      const dateOfMonth = new Date(paramsSearch?.from);
      from = paramsSearch?.from
        ? moment(
            new Date(dateOfMonth.getFullYear(), dateOfMonth.getMonth(), 1)
          ).format('YYYY-MM-DD')
        : moment(new Date(date.getFullYear(), date.getMonth(), 1)).format(
            'YYYY-MM-DD'
          );
      to = paramsSearch?.to
        ? moment(paramsSearch?.to).format('YYYY-MM-DD')
        : moment(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format(
            'YYYY-MM-DD'
          );
      break;
    default:
      from = paramsSearch?.from
        ? moment(paramsSearch?.from).format('YYYY-MM-DD')
        : moment(date).format('YYYY-MM-DD');
      to = paramsSearch?.to
        ? moment(paramsSearch?.to).format('YYYY-MM-DD')
        : moment(date).format('YYYY-MM-DD');
      break;
  }

  useEffect(() => {
    dispatch(CommonAction.getListDevice());
    dispatch(CommonAction.getCompanyList());
  }, []);
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
      from,
      to,
      compare_inverter_id: paramsSearch?.inverter?.id,
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

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company:
        (listInverterTest && listInverterTest[0] && listInverterTest[0].id) ||
        null,
    });
  }, []);

  return (
    <>
      {isProcessing && <Loading />}
      <div className="content-wrap">
        <TitleHeader title="테스트(실증단지) 발전 통계" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={
              listInverterTest &&
              listInverterTest.map((item) => ({
                id: item?.id,
                label: item?.company.com_name,
              }))
            }
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
