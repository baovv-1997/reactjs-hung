import { Button } from 'commons/components/Button';
import { Card } from 'commons/components/Card';
import Search from 'commons/components/Search';
import { TitleHeader } from 'commons/components/TitleHeader';
import MainLayout from 'layout/MainLayout';
// import comapyInverter from 'mockData/dashboardComany';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getListDeviceTestSolarDashboard } from '../redux';

const SolarDashboard = () => {
  const dispatch = useDispatch();

  const { isLoading, listDevice, total } = useSelector(
    (state) => state?.solarDashboard
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);
  const perPage = 8;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSubmitSearch = () => {
    console.log(searchTerm);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  // get list device of company
  useEffect(() => {
    dispatch(getListDeviceTestSolarDashboard());
  }, []);

  // const renderInverter = comapyInverter.length ? (
  //   comapyInverter.map((item) => {
  //     const { id, nameComany, listInverter } = item;
  //     let hasEvent = false;
  //     listInverter.forEach((item1) => {
  //       if (item1?.isEvent) hasEvent = true;
  //     });
  //     return (
  //       <div
  //         className={`company-item item-${listInverter.length} ${
  //           hasEvent ? 'company-hasevent' : ''
  //         }`}
  //         key={id}
  //       >
  //         <div
  //           className={`company-name ${
  //             hasEvent ? 'company-hasevent-title' : ''
  //           }`}
  //         >
  //           {nameComany}
  //         </div>

  //         <div className="list-card-item ">
  //           {listInverter &&
  //             listInverter.map((inverterItem) => {
  //               const {
  //                 id: idInverter,
  //                 area,
  //                 listItem,
  //                 isEvent,
  //               } = inverterItem;

  //               return (
  //                 <Card
  //                   key={idInverter}
  //                   customClass="header-company"
  //                   isCardCompany
  //                   listItem={listItem}
  //                   title={area}
  //                   isEvent={isEvent}
  //                 />
  //               );
  //             })}
  //         </div>
  //       </div>
  //     );
  //   })
  // ) : (
  //   <div>No data</div>
  // );

  console.log(listDevice, 'listDevice');
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

export default SolarDashboard;
