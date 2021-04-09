// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from 'commons/components/TitleHeader';
import { TIME_REQUEST } from 'constants/index';
import * as CommonAction from 'commons/redux';
import { addEventFilter, getEventList } from 'commons/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
import ItemContentTab from './ItemContentTab';
import * as ActionGenerator from '../../redux';

type Props = {
  location: {
    pathname: string,
  },
};

const OperationStatusPage = ({ location }: Props) => {
  const history = useHistory();
  const { deviceList, optionFilters, eventList, totalEventPage } = useSelector(
    (state) => state?.commons
  );
  const {
    isProcessing,
    total,
    dataChartOperation,
    listDataTableRawOperation,
    dataCardOperation,
  } = useSelector((state) => state?.testMockupStatus);
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
    company: null,
    page2: 1,
    ACVoltage: true,
    ACCurrent: true,
    ACPower: true,
    pagination: defaultOption,
    pagination2: defaultOption,
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, TIME_REQUEST);
    return () => clearInterval(interval);
  }, []);

  // call api getCardInformation
  const handleGetCardInformation = useCallback(
    (company) => {
      dispatch(
        ActionGenerator.getCardTestMKStatusOperation({
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
      dispatch(ActionGenerator.getDataTestMKChartStatusOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataTrendChart({
        inverter_id: paramsSearch?.company,
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
      dispatch(ActionGenerator.getDataTestMKRawTableOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataRawTable({
        inverter_id: paramsSearch?.company,
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
        dispatch(addEventFilter(item));
        setIsShowModalSorting(false);
        setParamsSearch({ ...paramsSearch, page2: 1 });
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

  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company:
        listInverterTest && listInverterTest[0] && listInverterTest[0].id,
    });
  }, []);

  return (
    <>
      {isProcessing && <Loading />}
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
              dataChartOperation={dataChartOperation}
              optionFilters={optionFilters}
              handleChangeSearch={handleChangeSearch}
              handleClickDetail={handleClickDetail}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo<Props>(OperationStatusPage);
