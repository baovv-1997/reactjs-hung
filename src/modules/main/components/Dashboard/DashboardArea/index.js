import MainLayout from 'layout/MainLayout';
import { mockDataMain } from 'mockData/mainData';
import React from 'react';
import IMAGES from 'themes/images';
import InfoReality from '../../InfoReality';
import TotalPower from '../../TotalPower';
import VitualData from '../../VitualData';
import WeeklyElectric from '../../WeeklyElectric';

const DashboardArea = () => {
  const { totalPower, infoReality, vitualData } = mockDataMain;

  return (
    <MainLayout isSelect>
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
