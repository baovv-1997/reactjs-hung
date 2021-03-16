// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import {
  listDataTestMockupOperationStatus,
  tableOperationStatusByAreaCompany,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import * as SignInAction from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ROUTERS from 'constants/routers';
import { useHistory } from 'react-router-dom';
import ItemContentTab from './ItemContentTab';

const StatusByAreaCompany = () => {
  const history = useHistory();
  const perPage = 6;
  const totalPage = 100;
  const perPage2 = 6;
  const totalPage2 = 100;
  const { isProcessing, listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const { listInverter } = useSelector((state) => state?.account);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    classification: 'minute',
    startDate: new Date() || null,
    endDate: new Date() || null,
    vendorCompany: null,
    inverter: null,
    company: null,
    ACVoltage: false,
    ACCurrent: false,
    ACPower: false,
    pagination: defaultOption,
    pagination2: defaultOption,
    page2: 1,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StatusCompanyAction.getListStatusCompany());
  }, []);

  // call api get list all video
  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    console.log('Call api on page');
  }, [
    paramsSearch?.page,
    paramsSearch?.page2,
    paramsSearch?.company,
    paramsSearch?.ACCurrent,
    paramsSearch?.ACVoltage,
    paramsSearch?.ACPower,
    paramsSearch?.pagination,
    paramsSearch?.pagination2,
    dispatch,
  ]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
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
        });
        break;
      case 'page':
        setParamsSearch({
          ...paramsSearch,
          page: item,
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
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
        console.log(item, 'optionCheck', name);
        setIsShowModalSorting(false);
        break;
      case 'classification':
        setParamsSearch({
          ...paramsSearch,
          classification: item,
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
            per_page: 0,
            com_id: item?.value,
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
      case 'submitSearch':
        // call api update list table
        break;
      default:
        break;
    }
  };

  const handleDownloadTrend = (name) => {
    console.log('download Trend', name);
  };
  //  click vào table bên dưới đến trang chi tiết
  const handleClickDetail = (item) => {
    history.push(`${ROUTERS.TEST_MOCKUP_OPERATION}/${item.id}`);
  };
  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="테스트(목업) 운영 통계" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            paramsSearch={paramsSearch}
            listStatusCompanySelect={listStatusCompanySelect}
          />
          <div className="content-body-left border-pd-20">
            <div className="h-100">
              <ItemContentTab
                listMockupDataCompany={listDataTestMockupOperationStatus}
                dataContent={{}}
                dataBoxContent={dataBoxContent}
                handleDownloadTrend={handleDownloadTrend}
                handleChangeSearch={handleChangeSearch}
                tableOperationStatusByAreaCompany={
                  tableOperationStatusByAreaCompany
                }
                isShowModalSorting={isShowModalSorting}
                handleClickDetail={handleClickDetail}
                paramsSearch={paramsSearch}
                totalPage={totalPage}
                perPage={perPage}
                totalPage2={totalPage2}
                perPage2={perPage2}
                listInverter={listInverter}
                listStatusCompanySelect={listStatusCompanySelect}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusByAreaCompany;
