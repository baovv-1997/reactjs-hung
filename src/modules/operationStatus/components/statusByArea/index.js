// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import { listMockupType, listMockupDataCompany } from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const perPage = 6;
  const totalPage = 100;
  const [menuTab, setMenuTab] = useState('bulk');
  console.log(menuTab, 'menuTab');
  const { isProcessing, listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );
  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };
  const defaultCheckBox = {
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
  };
  const [itemSelect, setItemSelect] = useState({});
  const [itemSelectMocKup, setItemSelectMocKup] = useState({});
  const [paginationType, setPaginationType] = useState(defaultOption);
  const [activePage, setActivePage] = useState(1);
  const [checkBox, setCheckBox] = useState(defaultCheckBox);

  const [paramsSearch, setParamsSearch] = useState({
    sort_by: '',
    sort_dir: '',
    page: '',
    keyword: '',
  });

  const dataBoxContent = {
    angleOfIncidence: '15',
    azimuth: '남동10',
    moduleOutput: '378',
    moduleColor: '보라',
  };

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
    setItemSelectMocKup(item);
  };

  const handleToggleCheckbox = (check, name) => {
    setCheckBox({
      ...checkBox,
      [name]: !check,
    });
  };

  const handleChangePagination = (option) => {
    setPaginationType(option);
  };

  const onSelect = (eventKey) => {
    window.scrollTo(0, 0);
    setMenuTab(eventKey);
    setPaginationType(defaultOption);
    setCheckBox(defaultCheckBox);
  };

  const handleDownloadRaw = () => {
    console.log('download Raw');
  };

  const handleDownloadTrend = () => {
    console.log('download Trend');
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
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
        className={`${itemSelectMocKup?.id === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
        <div className="content-body page-company">
          <div className="content-select-sidebar">
            <TitleSubHeader title="실증단지" />
            <ul className="list-item-select">{renderListCompany}</ul>

            <TitleSubHeader title="목업" titleLight="RTU" className="mt-5" />
            <ul className="list-item-select">{renderListMocKup}</ul>
          </div>
          <div className="content-body-left">
            <div>
              <Tabs
                defaultActiveKey="bulk"
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                <Tab
                  eventKey="bulk"
                  title={<div className="tab-name">전체</div>}
                >
                  <ItemContentTab
                    dataBoxContent={dataBoxContent}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                    handlePageChange={handlePageChange}
                    totalPage={totalPage}
                    perPage={perPage}
                    activePage={activePage}
                  />
                </Tab>

                <div className="opacity d-block pagination">
                  {totalPage > perPage && (
                    <div className="wrapper-device__pagination">
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={perPage}
                        totalItemsCount={totalPage}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    </div>
                  )}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationStatusPage;
