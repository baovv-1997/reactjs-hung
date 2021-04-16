// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
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
    total,
    dataChartOperation,
    listDataTableRaw,
    dataBoxOperation,
    totalMockup,
    listDataTableRawMockup,
    isProcessingRaw,
    isProcessingRaw2,
  } = useSelector((state) => state?.testSolarMonitoringStatus);

  const [randomNumber, setRandomNumber] = useState(null);
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    company: null,
    page2: 1,
    PVVoltage: true,
    PVCurrent: true,
    outputVoltage: true,
    outputCurrent: true,
    print: true,
    pagination: defaultOption,
    pagination2: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);

  const dataBoxContent = {
    angleOfIncidence:
      (dataBoxOperation?.ds_incidence_angle &&
        dataBoxOperation?.ds_incidence_angle.toLocaleString('en')) ||
      '0',
    azimuth:
      (dataBoxOperation?.ds_azimuth_angle &&
        dataBoxOperation?.ds_azimuth_angle.toLocaleString('en')) ||
      '0',
    moduleOutput:
      (dataBoxOperation?.dm_power &&
        dataBoxOperation?.dm_power.toLocaleString('en')) ||
      '0',
    moduleColor: dataBoxOperation?.ds_color || '',
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      CommonAction.getListDevice({
        per_page: 9999999,
        type: '2',
      })
    );
  }, []);
  useEffect(() => {
    setParamsSearch({
      ...paramsSearch,
      company:
        deviceList && deviceList.length > 1
          ? deviceList && deviceList[1] && deviceList[1].id
          : deviceList && deviceList[0] && deviceList[0].id,
    });
  }, [deviceList]);

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
        ActionGenerator.getCardInformationOperation({
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
      dispatch(ActionGenerator.getDataTrendChartOperation(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (paramsSearch?.company) {
      handleGetDataTrendChart({
        inverter_id: paramsSearch?.company,
      });
    }
  }, [handleGetDataTrendChart, paramsSearch?.company, randomNumber]);

  // call api getDataTrend table
  const handleGetDataRawTable = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataRawTableOperation(params));
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

  // call api getDataTrend table Mockup
  const handleGetDataRawTableMockup = useCallback(
    (params) => {
      dispatch(ActionGenerator.getDataRawTableMockupOperation(params));
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
          page: 1,
          page2: 1,
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
            paramsSearch.page < Math.ceil(total / item.value)
              ? paramsSearch.page
              : Math.ceil(total / item.value),
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
          page2:
            paramsSearch.page2 < Math.ceil(totalMockup / item.value)
              ? paramsSearch.page2
              : Math.ceil(totalMockup / item.value),
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

      default:
        break;
    }
  };

  return (
    <div className="content-wrap">
      <TitleHeader title="테스트(실증단지) 운영 현황" />
      <div className="content-body page-company">
        <GroupSelectSidebar
          handleChangeSearch={handleChangeSearch}
          paramsSearch={paramsSearch}
          listStatusCompanySelect={
            deviceList && deviceList.length > 1
              ? deviceList.slice(1).map((item) => ({
                  id: item?.id,
                  label: item?.company?.com_name,
                }))
              : deviceList.map((item) => ({
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
            listMockupDataCompany={listDataTableRaw}
            totalPage={total}
            perPage={paramsSearch?.pagination?.value}
            totalPage2={totalMockup}
            perPage2={paramsSearch?.pagination2?.value}
            dataTableBottom={listDataTableRawMockup}
            paramsSearch={paramsSearch}
            dataChartOperation={dataChartOperation}
            handleChangeSearch={handleChangeSearch}
            isProcessingRaw={isProcessingRaw}
            isProcessingRaw2={isProcessingRaw2}
          />
        </div>
      </div>
    </div>
  );
};

export default OperationStatusPage;
