import { Card } from 'commons/components/Card';
import Loading from 'commons/components/Loading';
import { TitleHeader } from 'commons/components/TitleHeader';
// import MainLayout from 'layout/MainLayout';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getListDeviceTestSolarDashboard } from '../redux';

const SolarDashboard = () => {
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
      const isEvent = Boolean(event);
      return (
        <Card
          key={id}
          customClass="card-company"
          isCardCompany
          title={name}
          isEvent={isEvent}
          amountElectricDay={amountElectricDay}
          amountElectricMonth={amountElectricMonth}
          electricRealtime={electricRealtime}
          ratePower={ratePower}
          cumulativeElectric={cumulativeElectric}
          titleClick={() => {
            console.log(id);
          }}
        />
      );
    });

  return (
    <>
      {isLoading && <Loading />}
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
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SolarDashboard;
