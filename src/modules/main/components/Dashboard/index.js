import React from 'react';
import MainLayout from 'layout/MainLayout';
import { mockDataMain, mockLocationArea } from 'mockData/mainData';

import IMAGES from 'themes/images';
import { useSelector } from 'react-redux';
// import { getListPosition, getListCompany } from 'modules/main/redux';
import InfoReality from '../InfoReality';
import TotalPower from '../TotalPower';
import VitualData from '../VitualData';
import WeeklyElectric from '../WeeklyElectric';

const MainPage = () => {
  // const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.main);
  const { totalPower, infoReality, vitualData } = mockDataMain;

  // useEffect(() => {
  //   dispatch(getListPosition());
  //   dispatch(getListCompany());
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

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
          <TotalPower data={totalPower} />
          <WeeklyElectric />
          <InfoReality data={infoReality} />
          <VitualData data={vitualData} />
        </div>

        {mockLocationArea.map((item) => (

          <>
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
          </>
        ))}
      </div>
    </MainLayout>
  );
};

export default MainPage;
