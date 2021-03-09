// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import * as StatusCompanyAction from '../redux';
import { listMockupType } from 'mockData/listCompany';

const StatusCompanyPage = () => {
  const { isProcessing, listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const [itemSelect, setItemSelect] = useState({});
  const [paramsSearch, setParamsSearch] = useState({
    sort_by: '',
    sort_dir: '',
    page: '',
    keyword: '',
  });

  const dispatch = useDispatch();
  // call api get list all video
  const getDataListStatusCompany = useCallback(() => {
    dispatch(StatusCompanyAction.getListStatusCompany(paramsSearch));
  }, [paramsSearch, dispatch]);

  useEffect(() => {
    getDataListStatusCompany();
  }, [getDataListStatusCompany]);

  // console.log(type, 'type', isProcessing);
  const handleClickSelectCompany = (item) => {
    setItemSelect(item);
    setParamsSearch({
      sort_by: '',
      sort_dir: '',
      page: '',
      keyword: '',
    });
  };

  const handleClickSelectMocKup = (item) => {
    console.log(item);
  };

  const renderListCompany =
    listStatusCompanySelect &&
    listStatusCompanySelect.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClickSelectCompany(item)}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${itemSelect?.id === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  const renderListMocKup =
    listMockupType &&
    listMockupType.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClickSelectMocKup(item)}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${itemSelect?.id === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
        <div className="content-body">
          <div className="content-select-sidebar">
            <TitleSubHeader title="실증단지" />
            <ul className="list-item-select">{renderListCompany}</ul>

            <TitleSubHeader title="목업" titleLight="RTU" className="mt-5" />
            <ul className="list-item-select">{renderListMocKup}</ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusCompanyPage;
