// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import { listMockupDataCompany } from 'mockData/listCompany';
import { headStatusCompany } from 'constants/headerTable';
import * as StatusCompanyAction from '../../redux';
import ItemContentTab from '../ItemContentTab';

const StatusByAreaCompany = () => {
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
    power: false,
    temperature: false,
    insolation: false,
  };
  const [itemSelect, setItemSelect] = useState({});
  const [paginationType, setPaginationType] = useState(defaultOption);

  const [checkBox, setCheckBox] = useState(defaultCheckBox);

  const [paramsSearch, setParamsSearch] = useState({
    sort_by: '',
    sort_dir: '',
    page: '',
    keyword: '',
  });

  const powerData = {
    type: 'power',
    data: [
      { title: '일일 평균 1시간 발전량', value: '60' },
      { title: '일일발전량 달성율', value: '85.2' },
    ],
  };

  const temperatureData = {
    type: 'temperature',
    data: [
      { title: '현재 모듈 온도', value: '30.8' },
      { title: '최고 모듈 온도', value: '35.2' },
    ],
  };

  const insolationData = {
    type: 'insolation',
    data: [
      { title: '수평 일사량', value: '22' },
      { title: '경사 일사량', value: '46' },
    ],
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

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 발전 현황" />
        <div className="content-body page-company">
          <div className="content-select-sidebar">
            <TitleSubHeader title="실증단지" />
            <ul className="list-item-select">{renderListCompany}</ul>
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
                    powerData={powerData}
                    temperatureData={temperatureData}
                    insolationData={insolationData}
                    headStatusCompany={headStatusCompany}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                  />
                </Tab>
                <Tab
                  eventKey="bulk2"
                  title={
                    <div className="tab-name">
                      코에스 <span>인버터 ID</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    powerData={powerData}
                    temperatureData={temperatureData}
                    insolationData={insolationData}
                    headStatusCompany={headStatusCompany}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                  />
                </Tab>
                <Tab
                  eventKey="bulk3"
                  title={
                    <div className="tab-name">
                      에스케이솔라 <span>인버터 ID</span>
                    </div>
                  }
                >
                  <ItemContentTab
                    powerData={powerData}
                    temperatureData={temperatureData}
                    insolationData={insolationData}
                    headStatusCompany={headStatusCompany}
                    listMockupDataCompany={listMockupDataCompany}
                    handleToggleCheckbox={handleToggleCheckbox}
                    checkBox={checkBox}
                    handleChangePagination={handleChangePagination}
                    paginationType={paginationType}
                    handleDownloadRaw={handleDownloadRaw}
                    handleDownloadTrend={handleDownloadTrend}
                    dataContent={{}}
                  />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StatusByAreaCompany;
