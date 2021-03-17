// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import { dataTable1 } from '../data';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import * as SignInAction from 'modules/accounts/redux';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  // const history = useHistory();
  const perPage = 6;
  const totalPage = 100;
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
    insolation: false,
    performance: false,
    generation: false,
    pagination: defaultOption,
  };

  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const dataBoxContent = {
    day: '300',
    month: '9,000',
    year: '300',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StatusCompanyAction.getListStatusCompany());
  }, []);

  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    console.log('Call api on page');
  }, [
    paramsSearch?.page,
    paramsSearch?.company,
    paramsSearch?.insolation,
    paramsSearch?.generation,
    paramsSearch?.pagination,
    dispatch,
  ]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

  // console.log(type, 'type', isProcessing);
  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setParamsSearch({
          ...paramsSearch,
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
        });
        break;
      case 'pagination':
        setParamsSearch({
          ...paramsSearch,
          pagination: item,
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
            listStatusCompanySelect={listStatusCompanySelect}
          />
          <div className="content-body-left w-100 border-pd-20">
            <ItemContentTab
              dataBoxContent={dataBoxContent}
              dataTableStatisticsCompany={dataTable1}
              handleDownloadTrend={handleDownloadTrend}
              dataContent={{}}
              totalPage={totalPage}
              perPage={perPage}
              listInverter={listInverter}
              listStatusCompanySelect={listStatusCompanySelect}
              paramsSearch={paramsSearch}
              handleChangeSearch={handleChangeSearch}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationStatusPage;
