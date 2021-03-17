import MainLayout from 'layout/MainLayout';
import { mockDataMain } from 'mockData/mainData';
import { getListPosition } from 'modules/main/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IMAGES from 'themes/images';
import InfoReality from '../../InfoReality';
import TotalPower from '../../TotalPower';
import VitualData from '../../VitualData';
import WeeklyElectric from '../../WeeklyElectric';

const DashboardArea = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state?.main);
  const { totalPower, infoReality, vitualData } = mockDataMain;

  useEffect(() => {
    dispatch(getListPosition());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <MainLayout isSelect isProcessing={isLoading}>
      <div className="dashboard-area">
        {/* thong tin  */}

        <div className="current-electric">
          <div className="current-electric__title">
            <img src={IMAGES.icon_title} alt="Title" className="icon-title" />
            <p className="title">전체</p>
            <div className="line" />
          </div>
          <TotalPower data={totalPower} />
          <WeeklyElectric />
          <InfoReality data={infoReality} />
          <VitualData data={vitualData} />
        </div>

        {/* {mockLocationArea.map((item) => (
          <img
            src={IMAGES.icon_location}
            alt=""
            className="location"
            style={{
              top: `${item.location?.top}px`,
              left: `${item.location?.left}px`,
            }}
            key={item.id}
          />
        ))} */}
      </div>
    </MainLayout>
  );
};

export default DashboardArea;
