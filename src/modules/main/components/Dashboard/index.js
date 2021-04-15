/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import IMAGES from 'themes/images';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListPosition,
  getListCompany,
  getCardMeasureMain,
  setPositionId,
  setCompanyId,
  getCompanySearchMain,
  getPositionSearchMain,
  getCardMeasureSearchPosition,
  getCardMeasureSearchCompany,
  getTotalMetric,
} from 'modules/main/redux';
import Draggable from 'react-draggable';
import { Card } from 'commons/components/Card';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import Search from 'commons/components/Search';
import useDebounce from 'customHooks/useDebounce';
import { ModalPopup } from 'commons/components/Modal';
import Loading from 'commons/components/Loading';
import InfoReality from '../InfoReality';
import TotalPower from '../TotalPower';
import VitualData from '../VitualData';
import WeeklyElectric from '../WeeklyElectric';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    optionsCompany,
    optionsPosition,
    listPositions,
    cardPositionMain,
    isSpinner,
    isLoading,
    totalMetric,
  } = useSelector((state) => state.main);
  const { userInfo } = useSelector((state) => state?.account);
  const count = useRef(0);
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState({
    label: '',
    value: '',
    key: '',
    id: '',
  });
  const [modal, setModal] = useState({ isShow: false, content: '' });
  const [typeSearch, setTypeSearch] = useState({ type: '', id: null });
  const [labelMatric, setLabelMatric] = useState('전체');
  const [searchCompany, setSearchCompany] = useState(false);

  const roleUser =
    userInfo && userInfo.roles && userInfo.roles[0] && userInfo?.roles[0]?.id;

  const debouncedSearchTerm = useDebounce(searchTerm.label, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getCompanySearchMain({ keyword: debouncedSearchTerm }));
      dispatch(getPositionSearchMain({ keyword: debouncedSearchTerm }));
    }
  }, [debouncedSearchTerm]);

  const { data: totalInfo, chart } = totalMetric;

  useEffect(() => {
    if (roleUser === 2) {
      dispatch(getListPosition({ com_id: userInfo.com_id }));
      dispatch(getTotalMetric({ com_id: userInfo.com_id }));
    } else {
      dispatch(getListPosition());
      dispatch(getTotalMetric());
    }
    dispatch(getListCompany());
  }, []);

  useEffect(() => {
    if (listPositions) {
      dispatch(
        getCardMeasureMain({
          type: 'summary',
          pos_id: listPositions[count.current]?.id,
        })
      );
    }
  }, [listPositions]);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      if (count.current > listPositions.length - 1) {
        count.current = 0;
      }
      if (!typeSearch.type) {
        dispatch(
          getCardMeasureMain({
            type: 'summary',
            pos_id: listPositions[count.current]?.id,
          })
        );
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [listPositions, typeSearch]);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (typeSearch.type) {
        case 'posId':
          dispatch(getTotalMetric({ pos_id: typeSearch.id }));
          break;
        case 'comId':
          dispatch(getTotalMetric({ com_id: typeSearch.id }));
          break;
        default:
          if (roleUser === 2)
            dispatch(getTotalMetric({ com_id: userInfo.com_id }));
          else dispatch(getTotalMetric({ com_id: userInfo.com_id }));
          break;
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [totalMetric, typeSearch]);

  // when click title redirect dashboard area of area
  const handleTitleClick = (id) => {
    history.push(ROUTERS.DASHBOARD_AREA);
    dispatch(setPositionId({ id }));
  };

  // when click logo redirect dashboard company of company
  const handleLogoClick = (id) => {
    history.push(ROUTERS.STATUS_COMPANY);
    dispatch(setCompanyId({ id }));
  };

  // when input search change set value
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm({ label: value });
  };

  const searchSubmit = () => {
    const type = searchTerm?.key;
    if (!searchTerm.label) {
      inputRef.current.focus();
      return;
    }
    switch (type) {
      case 'posId':
        dispatch(
          getCardMeasureSearchPosition({
            type: 'summary',
            pos_id: searchTerm.id,
          })
        );
        setSearchCompany(false);
        dispatch(getTotalMetric({ pos_id: searchTerm.id }));
        setTypeSearch({ type: 'posId', id: searchTerm.id });
        setLabelMatric(searchTerm.label);
        break;
      case 'comId':
        dispatch(
          getCardMeasureSearchCompany({
            type: 'summary',
            com_id: searchTerm.id,
          })
        );
        setSearchCompany(true);
        dispatch(getTotalMetric({ com_id: searchTerm.id }));
        setTypeSearch({ type: 'comId', id: searchTerm.id });
        setLabelMatric(searchTerm.label);
        break;
      default:
        setModal({
          ...modal,
          isShow: true,
          content: '구역명이나 업체명을 정확히 입력해주세요.',
        });
        break;
    }
  };

  // Handle Icon search Click
  const handleIconClick = () => {
    searchSubmit();
  };

  // Handle event press key enter search
  const handleKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      searchSubmit();
    }
  };

  const renderPositionActive = cardPositionMain.length
    ? cardPositionMain?.map((posItem) => (
        <img
          key={posItem?.position?.id}
          src={IMAGES.icon_location_on}
          alt=""
          className="location"
          style={{
            top: `${posItem?.position?.pos_map_y}px`,
            left: `${posItem?.position?.pos_map_x}px`,
          }}
        />
      ))
    : '';

  return (
    <>
      <div className="main-page">
        <Search
          placeholder="회사명이나 구역명으로 검색해보세요."
          customClass="main-search"
          value={searchTerm.label}
          onChange={handleSearchChange}
          setSearchTerm={setSearchTerm}
          options={[...optionsPosition, ...optionsCompany]}
          handleIconClick={handleIconClick}
          handleKeyDown={handleKeyDownSearch}
          isSpinner={isSpinner}
          isDisabled={userInfo?.roles[0].id === 2}
          inputRef={inputRef}
        />

        <div className="current-electric">
          <div className="current-electric__title">
            <img src={IMAGES.icon_title} alt="Title" className="icon-title" />
            <p className="title">{labelMatric}</p>
            <div className="line" />
          </div>
          <TotalPower
            amountElectricDay={totalInfo?.prod_today}
            amountElectricMonth={totalInfo?.prod_inmonth}
            cumulativeElectric={totalInfo?.prod_sum}
          />
          <WeeklyElectric measure={chart} />
          <InfoReality
            outputVoltage={totalInfo?.output_voltage}
            outputCurrent={totalInfo?.output_current}
            electricRealtime={totalInfo?.prod_realtime}
            ratePower={totalInfo?.performance_ratio}
          />
          <VitualData
            radiance={totalInfo?.radiance}
            temperature={totalInfo?.temperature}
          />
        </div>

        {listPositions &&
          listPositions.map((item) => (
            <img
              src={IMAGES.icon_location}
              alt=""
              className="location"
              style={{
                top: `${item.posY}px`,
                left: `${item.posX}px`,
              }}
              key={item.id}
            />
          ))}
        {isLoading ? <Loading /> : <>{renderPositionActive}</>}
        {cardPositionMain &&
          cardPositionMain?.map((posItem) => (
            <Draggable disabled={!searchCompany} bounds="parent">
              <div
                // key={posItem?.position?.id}
                className={`display-main-card ${searchCompany && 'card-drag'}`}
                style={{
                  top: `${posItem?.position?.pos_map_y - 300}px`,
                  left: `${posItem?.position?.pos_map_x - 300}px`,
                }}
              >
                <Card
                  title={posItem?.position?.pos_name}
                  listCompany={posItem?.company}
                  amountElectricDay={posItem?.card?.prod_today}
                  amountElectricMonth={posItem?.card?.prod_inmonth}
                  electricRealtime={posItem?.card?.prod_realtime}
                  cumulativeElectric={posItem?.card?.prod_sum}
                  ratePower={posItem?.card?.performance_ratio}
                  isEvent={!!posItem?.card?.event}
                  titleClick={() => handleTitleClick(posItem?.position?.id)}
                  logoClick={handleLogoClick}
                />
              </div>
            </Draggable>
          ))}
        <ModalPopup
          isOpen={modal.isShow}
          isShowHeader
          title="알림"
          isShowIconClose
          isShowFooter
          handleCloseIcon={() =>
            setModal({
              ...modal,
              isShow: false,
              content: '',
            })
          }
          handleClose={() =>
            setModal({
              ...modal,
              isShow: false,
              content: '',
            })
          }
          textBtnRight="확인"
        >
          {modal.content}
        </ModalPopup>
      </div>
    </>
  );
};

export default MainPage;
