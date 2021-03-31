import { Card } from 'commons/components/Card';
import { TitleHeader } from 'commons/components/TitleHeader';
// import MainLayout from 'layout/MainLayout';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
import { getListDeviceTestDashboard, setInverterId } from '../redux';

const TestDashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listDevice, total, isLoading } = useSelector(
    (state) => state?.testDashboard
  );

  const [activePage, setActivePage] = useState(1);
  const perPage = 10;

  // pagination page
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(
      getListDeviceTestDashboard({ page: pageNumber, per_page: perPage })
    );
  };

  // get list device of company
  useEffect(() => {
    dispatch(getListDeviceTestDashboard({ per_page: perPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardClick = (id) => {
    history.push(ROUTERS.TEST_MOCKUP_STATISTICS_DEVELOP);
    dispatch(setInverterId({ id }));
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
      {isLoading && <Loading />}
      <div className="content-wrap">
        <TitleHeader
          title="테스트(목업)"
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

export default TestDashboard;
