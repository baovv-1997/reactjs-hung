import { Card } from 'commons/components/Card';
import Loading from 'commons/components/Loading';
import { TitleHeader } from 'commons/components/TitleHeader';
// import MainLayout from 'layout/MainLayout';
import ROUTERS from 'constants/routers';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IMAGES from 'themes/images';
import { getListDeviceTestSolarDashboard, setCompanyId } from '../redux';

const SolarDashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { listDevice, total, isLoading } = useSelector(
    (state) => state?.solarDashboard
  );

  const [activePage, setActivePage] = useState(1);
  const perPage = 10;

  // pagination page
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // get list device of company
  useEffect(() => {
    dispatch(getListDeviceTestSolarDashboard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardClick = (id) => {
    history.push(ROUTERS.TEST_SOLAR_STATUS_DEVELOP);
    dispatch(setCompanyId({ id }));
  };

  const renderInverter =
    listDevice &&
    listDevice.map((item) => {
      const {
        id,
        name,
        amountElectricDay,
        amountElectricMonth,
        electricRealtime,
        ratePower,
        cumulativeElectric,
        event,
      } = item;
      return (
        <Card
          key={id}
          customClass="card-company"
          isCardCompany
          title={name}
          isEvent={!!event}
          amountElectricDay={amountElectricDay}
          amountElectricMonth={amountElectricMonth}
          electricRealtime={electricRealtime}
          ratePower={ratePower}
          cumulativeElectric={cumulativeElectric}
          onClick={() => handleCardClick(id)}
        />
      );
    });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="content-wrap">
          <TitleHeader
            title="테스트(실증단지)"
            descSub="설치된 목업들에 데이터를 확인하실 수 있습니다."
          />

          <div className="list-company test-dashboard">{renderInverter}</div>

          <div className="opacity d-block pagination">
            {total > perPage && (
              <div className="wrapper-device__pagination">
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={perPage}
                  totalItemsCount={total}
                  pageRangeDisplayed={9}
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                  firstPageText={
                    <img
                      src={IMAGES.double_arrow_left}
                      alt=""
                      className="double-prev"
                    />
                  }
                  lastPageText={
                    <img
                      src={IMAGES.double_arrow_right}
                      alt=""
                      className="double-prev"
                    />
                  }
                  prevPageText={
                    <img
                      src={IMAGES.arrow_left}
                      alt=""
                      className="double-prev"
                    />
                  }
                  nextPageText={
                    <img
                      src={IMAGES.arrow_right1}
                      alt=""
                      className="double-prev"
                    />
                  }
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SolarDashboard;
