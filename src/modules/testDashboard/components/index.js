import { Card } from 'commons/components/Card';
import { TitleHeader } from 'commons/components/TitleHeader';
import MainLayout from 'layout/MainLayout';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import { getListDeviceTestDashboard } from '../redux';

const TestDashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, listDevice, total } = useSelector(
    (state) => state?.testDashboard
  );

  const [activePage, setActivePage] = useState(1);
  const perPage = 10;

  // pagination page
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(getListDeviceTestDashboard({ page: pageNumber, per_page: perPage }))
  };

  // get list device of company
  useEffect(() => {
    dispatch(
      getListDeviceTestDashboard({ per_page: perPage })
    );
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
          onClick={() => {
            // them id sau router
            history.push(`${ROUTERS.TEST_MOCKUP_STATUS}`);
          }}
        />
      );
    });
  return (
    <MainLayout isProcessing={isLoading}>
      <div className="content-wrap">
        <TitleHeader
          title="설치 업체"
          descSub="실증단지 내 설치된 업체들의 발전 데이터를 확인하실 수 있습니다."
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
    </MainLayout>
  );
};

export default TestDashboard;
