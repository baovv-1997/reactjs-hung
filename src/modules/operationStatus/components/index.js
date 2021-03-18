// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import MainLayout from 'layout/MainLayout';
import TitleHeader from 'commons/components/TitleHeader';

import {
  listMockupType,
  listMockupDataCompany,
  listParkingLot,
} from 'mockData/listCompany';
import * as StatusCompanyAction from 'modules/statusCompany/redux';
import ROUTERS from 'constants/routers';
import GroupSelectSidebar from 'commons/components/GroupSelectSidebar';
import { useHistory } from 'react-router-dom';
import { getListDevice, getEventList } from '../redux';

import ItemContentTab from './ItemContentTab';

const OperationStatusPage = () => {
  const history = useHistory();
  const perPage = 6;
  const totalPage = 100;
  const [menuTab, setMenuTab] = useState('bulk');
  console.log(menuTab, 'menuTab');
  const { listStatusCompanySelect } = useSelector(
    (state) => state?.statusCompany
  );

  const {
    deviceList,
    isProcessing,
    eventList,
    totalEventPage,
    perpageEvent,
  } = useSelector((state) => state.operationStatus);

  const defaultOption = {
    id: 1,
    value: 6,
    label: '6 개씩 보기',
  };

  const defaultSearch = {
    page: 1,
    mockupType: null,
    parkingLot: null,
    page2: 1,
    PVVoltage: false,
    PVCurrent: false,
    outputVoltage: false,
    outputCurrent: false,
    print: false,
    pagination: defaultOption,
    pagination2: defaultOption,
  };

  const [isShowModalSorting, setIsShowModalSorting] = useState(false);
  const [paramsSearch, setParamsSearch] = useState(defaultSearch);
  const [companySelected, setCompanySelected] = useState(null);
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

  useEffect(() => {
    dispatch(
      getListDevice({
        com_id: companySelected,
      })
    );
  }, [companySelected]);

  useEffect(() => {
    if (deviceList && deviceList.length > 0) {
      const initInverterId =
        deviceList && deviceList.length > 1
          ? 0
          : deviceList && deviceList[0] && deviceList[0].id;
      dispatch(
        getEventList({
          inverter_id: initInverterId,
          per_page: paramsSearch?.pagination2?.value,
          page: paramsSearch?.page2,
        })
      );
    }
  }, [deviceList, paramsSearch?.pagination2, paramsSearch?.page2]);

  useEffect(() => {
    setCompanySelected(
      listStatusCompanySelect &&
        listStatusCompanySelect[0] &&
        listStatusCompanySelect[0].id
    );
  }, [listStatusCompanySelect]);

  const handleChangeSearch = (item, name) => {
    switch (name) {
      case 'statusCompany':
        setCompanySelected(item.id);

        break;
      case 'mockupType':
        setParamsSearch({
          ...paramsSearch,
          mockupType: item.id,
        });
        break;
      case 'parkingLot':
        setParamsSearch({
          ...paramsSearch,
          parkingLot: item.id,
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
        });
        break;
      case 'pagination2':
        setParamsSearch({
          ...paramsSearch,
          pagination2: item,
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
        setIsShowModalSorting(false);
        break;
      default:
        break;
    }
  };

  //  click vào table bên dưới đến trang chi tiết
  const handleClickDetail = (item) => {
    history.push(`${ROUTERS.OPERATION_STATUS_BY_COMPANY}/${item.id}`);
  };
  const onSelect = (eventKey) => {
    window.scrollTo(0, 0);
    setMenuTab(eventKey);
    setParamsSearch(defaultSearch);
  };

  const handleDownloadTrend = (name) => {
    console.log(name, 'download Trend');
  };

  return (
    <MainLayout isProcessing={isProcessing}>
      <div className="content-wrap">
        <TitleHeader title="실증단지 운영 현황" />
        <div className="content-body page-company">
          <GroupSelectSidebar
            handleChangeSearch={handleChangeSearch}
            listParkingLot={listParkingLot}
            paramsSearch={{ ...paramsSearch, company: companySelected }}
            listStatusCompanySelect={listStatusCompanySelect}
            listMockupType={listMockupType}
          />
          <div className="content-body-left w-100">
            <div className="h-100">
              <Tabs
                // set active tab
                defaultActiveKey={
                  deviceList && deviceList.length > 1
                    ? 0
                    : deviceList && deviceList[0] && deviceList[0].id
                }
                className="list-order tab-list"
                onSelect={(eventKey) => onSelect(eventKey)}
              >
                {deviceList &&
                  deviceList.length > 0 &&
                  deviceList.map((item) => (
                    <Tab
                      eventKey={item.id}
                      title={
                        <div className="tab-name">
                          {item?.ds_name}
                          {item?.ds_name !== '전체' && <span>{item?.id}</span>}
                        </div>
                      }
                    >
                      <ItemContentTab
                        dataBoxContent={dataBoxContent}
                        listMockupDataCompany={listMockupDataCompany}
                        handleDownloadTrend={handleDownloadTrend}
                        dataContent={{}}
                        totalPage={totalPage}
                        perPage={perPage}
                        totalPage2={totalEventPage}
                        perPage2={perpageEvent}
                        tableOperationStatusByAreaCompany={
                          eventList &&
                          eventList.length > 0 &&
                          eventList.map((event) => ({
                            id: event?.id,
                            dateTime: moment(event?.created_at).format(
                              'YYYY-MM-DD hh:mm:ss'
                            ),
                            installer: event?.com_name,
                            inverterID: event?.username,
                            installationLocation: event?.pos_name,
                            eventName: event?.evt_type_label,
                            contents: event?.evt_content,
                          }))
                        }
                        isShowModalSorting={isShowModalSorting}
                        paramsSearch={paramsSearch}
                        handleClickDetail={handleClickDetail}
                        handleChangeSearch={handleChangeSearch}
                      />
                    </Tab>
                  ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationStatusPage;
