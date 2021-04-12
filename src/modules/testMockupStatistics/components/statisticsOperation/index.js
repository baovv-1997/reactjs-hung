// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, memo } from 'react';
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
import ROUTERS from 'constants/routers';

type Props = {
  location: {
    pathname: string,
  },
  history: {
    push: Function,
  },
};

const OperationStatusPage = ({ location, history }: Props) => {
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
    value: 5,
    label: '5 개씩 보기',
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
    from: new Date(),
    to: new Date(),
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
    if (paramsSearch?.company) {
      handleGetCardInformation(paramsSearch?.company);
    }
  }, [handleGetCardInformation, paramsSearch?.company, randomNumber]);
  // call api getDataTrend chart
  const handleGetDataTrendChart = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataChartTestMKStatisticsOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataTrendChart({
        inverter_id: paramsSearch?.company,
        type: paramsSearch?.classification || null,
        from,
        to,
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
      dispatch(ActionGenerator.getDataRawTestMKStatisticOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataRawTable({
        inverter_id: paramsSearch?.company,
        type: paramsSearch?.classification || null,
        from,
        to,
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

  // get event list when inverter, page, perpage have change
  useEffect(() => {
    if (paramsSearch?.company) {
      dispatch(
        getEventList({
          inverter_id: paramsSearch?.company || null,
          per_page: paramsSearch?.pagination2?.value,
          page: paramsSearch?.page2,
          type: optionFilters,
        })
      );
    }
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
          from: new Date(),
          to: new Date(),
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
          page2: 1,
        });
        break;
      default:
        break;
    }
  };

  //  click vào table bên dưới đến trang chi tiết
  const handleClickDetail = (item) => {
    history.push({
      pathname: `${ROUTERS.EVENT}/detail/${item.id}`,
      state: { prevRoute: location.pathname },
    });
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
            subTitle={false}
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
              handleClickDetail={handleClickDetail}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo<Props>(OperationStatusPage);
