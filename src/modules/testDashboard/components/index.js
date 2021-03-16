import { Button } from 'commons/components/Button';
import { Card } from 'commons/components/Card';
import Search from 'commons/components/Search';
import { TitleHeader } from 'commons/components/TitleHeader';
import MainLayout from 'layout/MainLayout';
// import comapyInverter from 'mockData/dashboardComany';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import ROUTERS from 'constants/routers';
import { getListDeviceTestDashboard } from '../redux';

const TestDashboard = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const { isLoading, listDevice, total } = useSelector(
    (state) => state?.testDashboard
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);
  const perPage = 8;

  // pagination page
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // when submit search button
  const handleSubmitSearch = () => {
    console.log(searchTerm);
  };

  // when input search change set value
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  // get list device of company
  useEffect(() => {
    dispatch(
      getListDeviceTestDashboard({
        type: 'test_mockup',
      })
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
          titleClick={() => {
            console.log(id);
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

        <div className="search__dashboard">
          <Search
            customClass="search__dashboard-input"
            placeholder="회사명, 수평 방향으로 검색해보세요."
            value={searchTerm}
            onChange={handleSearchChange}
            setSearchTerm={setSearchTerm}
          />
          <Button onClick={handleSubmitSearch}>검색</Button>
        </div>

        <div className="list-company">{renderInverter}</div>

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
