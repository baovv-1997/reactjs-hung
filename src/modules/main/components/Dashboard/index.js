import React, { useEffect, useRef } from 'react';
import MainLayout from 'layout/MainLayout';
import IMAGES from 'themes/images';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListPosition,
  getListCompany,
  getCardMeasureMain,
} from 'modules/main/redux';
import { Card } from 'commons/components/Card';
import InfoReality from '../InfoReality';
import TotalPower from '../TotalPower';
import VitualData from '../VitualData';
import WeeklyElectric from '../WeeklyElectric';

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading, listPositions, cardPositionMain } = useSelector(
    (state) => state.main
  );
  console.log('cardPositionMain', cardPositionMain);
  const { card, company, position, measure } = cardPositionMain;

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
    console.log('ansd');
    const interval = setInterval(() => {
      count.current += 1;
      if (count.current > listPositions.length) {
        count.current = 1;
      }
      dispatch(getCardMeasureMain({ type: 'summary', pos_id: count.current }));
    }, 30000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPositions, cardPositionMain]);

  // when click title redirect dashboard area of area
  const handleTitleClick = (id) => {
    console.log(id);
  };

  // when click logo redirect dashboard company of company
  const handleLogoClick = (id) => {
    console.log(id);
  };

  return (
    <MainLayout isSearch isProcessing={isLoading}>
      <div className="main-page">
        {/* thong tin  */}

        <div className="current-electric">
          <div className="current-electric__title">
            <img src={IMAGES.icon_title} alt="Title" className="icon-title" />
            <p className="title">전체</p>
            <div className="line" />
          </div>
          <TotalPower
            amountElectricDay={card?.prod_today}
            amountElectricMonth={card?.prod_inmonth}
            cumulativeElectric={card?.prod_sum}
          />
          <WeeklyElectric measure={measure} />
          <InfoReality
            outputVoltage={card?.output_voltage}
            outputCurrent={card?.output_current}
            electricRealtime={card?.prod_realtime}
            ratePower={card?.performance_ratio}
          />
          <VitualData
            radiance={card?.radiance}
            temperature={card?.temperature}
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

        {position && (
          <img
            src={IMAGES.icon_location_on}
            alt=""
            className="location"
            style={{
              top: `${position?.pos_map_y}px`,
              left: `${position?.pos_map_x}px`,
            }}
          />
        )}
        {card && (
          <div
            className="display-main-card"
            style={{
              top: `${position?.pos_map_y - 300}px`,
              left: `${position?.pos_map_x - 300}px`,
            }}
          >
            <Card
              title={position?.pos_name}
              listCompany={company}
              amountElectricDay={card?.prod_today}
              amountElectricMonth={card?.prod_inmonth}
              electricRealtime={card?.prod_realtime}
              cumulativeElectric={card?.prod_sum}
              ratePower={card?.performance_ratio}
              // logoClick={action('on-logo-click')}
              titleClick={() => handleTitleClick(position?.id)}
              logoClick={handleLogoClick}
              // titleClick={action('on-title-click')}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default MainPage;
