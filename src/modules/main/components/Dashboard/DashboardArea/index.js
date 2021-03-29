/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from 'commons/components/Card';
import { setPositionCardMeasure } from 'helpers';
import MainLayout from 'layout/MainLayout';
import { mockDataMain } from 'mockData/mainData';
import { getListPosition, getCardMeasureArea } from 'modules/main/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IMAGES from 'themes/images';
import InfoReality from '../../InfoReality';
import TotalPower from '../../TotalPower';
import VitualData from '../../VitualData';
import WeeklyElectric from '../../WeeklyElectric';

const DashboardArea = () => {
  const dispatch = useDispatch();
  const { isLoading, cardMeasureArea, listPositions } = useSelector(
    (state) => state?.main
  );
  const { totalPower, infoReality, vitualData } = mockDataMain;
  const [bgImage, setBgImage] = useState(null);
  const [positionName, setPositionName] = useState(null);

  useEffect(() => {
    dispatch(getListPosition());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSelect = (value) => {
    dispatch(getCardMeasureArea({ type: 'inverter', pos_id: value.id }));
    const positionSelected = listPositions.filter(
      (item) => item.id === value.id
    );
    setBgImage(positionSelected[0]?.pos_map_path?.thumbnail);
    setPositionName(positionSelected[0]?.label);
  };

  const handleLogoClick = (id) => {
    console.log('logoClick', id);
  };

  console.log(cardMeasureArea, 'cardMeasureArea');

  return (
    <MainLayout
      isSelect
      isProcessing={isLoading}
      handleChangeSelect={handleChangeSelect}
    >
      <div
        className="dashboard-area"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* thong tin  */}

        <div className="current-electric">
          <div className="current-electric__title">
            <img src={IMAGES.icon_title} alt="Title" className="icon-title" />
            <p className="title">{positionName}</p>
            <div className="line" />
          </div>
          <TotalPower data={totalPower} />
          <WeeklyElectric />
          <InfoReality data={infoReality} />
          <VitualData data={vitualData} />
        </div>

        {cardMeasureArea &&
          cardMeasureArea?.map((posItem, index) => (
            <div
              // key={posItem?.position?.id}
              className="display-main-card"
              style={{
                top: `${setPositionCardMeasure(index)?.top}px`,
                left: `${setPositionCardMeasure(index)?.left}px`,
              }}
            >
              <Card
                title={posItem?.company?.com_name}
                listCompany={[posItem?.company]}
                amountElectricDay={posItem?.card?.prod_today}
                amountElectricMonth={posItem?.card?.prod_inmonth}
                electricRealtime={posItem?.card?.prod_realtime}
                cumulativeElectric={posItem?.card?.prod_sum}
                ratePower={posItem?.card?.performance_ratio}
                logoClick={handleLogoClick}
              />
              <img
                src={IMAGES.icon_location}
                alt=""
                className="location-area"
              />
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default DashboardArea;
