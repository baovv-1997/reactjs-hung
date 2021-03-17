import { Card } from 'commons/components/Card';
import TitleHeader from 'commons/components/TitleHeader';
import { spliceCompanyInverter } from 'helpers';
import MainLayout from 'layout/MainLayout';
// import comapyInverter from 'mockData/dashboardComany';
import { getListCompanyInverters } from 'modules/main/redux';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';

const DashboardCompany = () => {
  const dispatch = useDispatch();
  const { isLoading, total, listCompanyInverters, perPage } = useSelector(
    (state) => state?.main
  );

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(
      getListCompanyInverters({
        type: 'company',
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(
      getListCompanyInverters({
        type: 'company',
        page: pageNumber,
      })
    );
  };

  // slice if item inverter > column
  spliceCompanyInverter(listCompanyInverters);

  // render Inverter
  const renderInverter = listCompanyInverters.length ? (
    listCompanyInverters.map((item, index) => {
      const { id, companyName, listInverter } = item;
      // get prev item
      const prevInverter = listCompanyInverters[index - 1];
      // get next item
      const nextInverter = listCompanyInverters[index + 1];

      let hasEvent = false;
      // check inverter have event?
      listInverter.forEach((item1) => {
        if (item1?.event) hasEvent = true;
      });

      // check event if company have inverter has event
      if (id === prevInverter?.id) {
        prevInverter.listInverter.map((item2) => {
          if (Boolean(item2.event) === true) hasEvent = true;
          return hasEvent;
        });
      }

      // check event if company have inverter has event
      if (id === nextInverter?.id) {
        nextInverter.listInverter.map((item2) => {
          if (Boolean(item2.event) === true) hasEvent = true;
          return hasEvent;
        });
      }

      return (
        <div
          className={`company-item item-${listInverter.length} ${
            hasEvent ? 'company-hasevent' : ''
          }`}
          key={id}
        >
          <div
            className={`company-name ${
              hasEvent ? 'company-hasevent-title' : ''
            }`}
          >
            {companyName}
          </div>

          <div className="list-card-item ">
            {listInverter &&
              listInverter.map((inverterItem) => {
                const {
                  InverterId,
                  amountElectricDay,
                  amountElectricMonth,
                  cumulativeElectric,
                  electricRealtime,
                  event,
                  name,
                  ratePower,
                } = inverterItem;
                const isEvent = Boolean(event);
                return (
                  <Card
                    key={InverterId}
                    customClass="card-company"
                    isCardCompany
                    amountElectricDay={amountElectricDay}
                    title={name}
                    amountElectricMonth={amountElectricMonth}
                    cumulativeElectric={cumulativeElectric}
                    electricRealtime={electricRealtime}
                    ratePower={ratePower}
                    isEvent={isEvent}
                  />
                );
              })}
          </div>
        </div>
      );
    })
  ) : (
    <div>No data</div>
  );

  return (
    <MainLayout isProcessing={isLoading}>
      <div className="content-wrap">
        <TitleHeader
          title="설치 업체"
          descSub="실증단지 내 설치된 업체들의 발전 데이터를 확인하실 수 있습니다."
        />

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

export default DashboardCompany;
