import React from 'react';
import MainLayout from 'layout/MainLayout';
import mockDataMain, { mockLocationArea } from 'mockData/mainData';

import images from 'themes/images';
import InfoReality from '../InfoReality';
import TotalPower from '../TotalPower';
import VitualData from '../VitualData';
import WeeklyElectric from '../WeeklyElectric';

const MainPage = () => {
  const { totalPower, infoReality, vitualData } = mockDataMain;
  return (
    <MainLayout>
      <div className="main-page">
        {/* thong tin  */}

        <div className="current-electric">
          <div className="current-electric__title">
            <img src={images.icon_title} alt="Title" className="icon-title" />
            <p className="title">전체</p>
            <div className="line" />
          </div>
          <TotalPower data={totalPower} />
          <WeeklyElectric />
          <InfoReality data={infoReality} />
          <VitualData data={vitualData} />
        </div>

        {mockLocationArea.map((item) => (
          <img
            src={images.icon_location}
            alt=""
            className="location"
            style={{
              top: `${item.location?.top}px`,
              left: `${item.location?.left}px`,
            }}
            key={item.id}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default MainPage;
