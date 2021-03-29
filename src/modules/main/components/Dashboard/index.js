import React, { useEffect, useRef } from 'react';
// import MainLayout from 'layout/MainLayout';
import IMAGES from 'themes/images';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListPosition,
  getListCompany,
  getCardMeasureMain,
  setPositionId,
  setCompanyId,
} from 'modules/main/redux';
import { Card } from 'commons/components/Card';
import { avenrageCard } from 'helpers';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import InfoReality from '../InfoReality';
import TotalPower from '../TotalPower';
import VitualData from '../VitualData';
import WeeklyElectric from '../WeeklyElectric';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listPositions, cardPositionMain } = useSelector(
    (state) => state.main
  );

  const { measure } = cardPositionMain;

  let avenrageCardMeasure;
  if (cardPositionMain.length) {
    avenrageCardMeasure = avenrageCard(cardPositionMain);
  }

  useEffect(() => {
    dispatch(getListPosition());
    dispatch(getListCompany());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const count = useRef(1);

  useEffect(() => {
    dispatch(getCardMeasureMain({ type: 'summary', pos_id: count.current }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      if (count.current > listPositions.length) {
        count.current = 1;
      }
      dispatch(getCardMeasureMain({ type: 'summary', pos_id: count.current }));
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPositions, cardPositionMain]);

  // when click title redirect dashboard area of area
  const handleTitleClick = (id) => {
    // console.log(id);
    history.push(ROUTERS.DASHBOARD_COMPANY);
    dispatch(setPositionId({ id }));
  };

  // when click logo redirect dashboard company of company
  const handleLogoClick = (id) => {
    history.push(ROUTERS.DASHBOARD_AREA);
    dispatch(setCompanyId({ id }));
  };

  const renderPositionActive = cardPositionMain.length
    ? cardPositionMain?.map((posItem) => (
        <img
          key={posItem.position?.id}
          src={IMAGES.icon_location_on}
          alt=""
          className="location"
          style={{
            top: `${posItem.position?.pos_map_y}px`,
            left: `${posItem.position?.pos_map_x}px`,
          }}
        />
      ))
    : '';

  return (
    // <MainLayout isSearch isProcessing={isLoading}>
    <div className="main-page">
      {/* thong tin  */}

      <div className="current-electric">
        <div className="current-electric__title">
          <img src={IMAGES.icon_title} alt="Title" className="icon-title" />
          <p className="title">전체</p>
          <div className="line" />
        </div>
        <TotalPower
          amountElectricDay={avenrageCardMeasure?.card?.prod_today}
          amountElectricMonth={avenrageCardMeasure?.card?.prod_inmonth}
          cumulativeElectric={avenrageCardMeasure?.card?.prod_sum}
        />
        <WeeklyElectric measure={measure} />
        <InfoReality
          outputVoltage={avenrageCardMeasure?.card?.output_voltage}
          outputCurrent={avenrageCardMeasure?.card?.output_current}
          electricRealtime={avenrageCardMeasure?.card?.prod_realtime}
          ratePower={avenrageCardMeasure?.card?.performance_ratio}
        />
        <VitualData
          radiance={avenrageCardMeasure?.card?.radiance}
          temperature={avenrageCardMeasure?.card?.temperature}
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

      {renderPositionActive}

      {cardPositionMain &&
        cardPositionMain?.map((posItem) => (
          <div
            // key={posItem?.position?.id}
            className="display-main-card"
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
              titleClick={() => handleTitleClick(posItem?.position?.id)}
              logoClick={handleLogoClick}
            />
          </div>
        ))}
    </div>
    // </MainLayout>
  );
};

export default MainPage;
