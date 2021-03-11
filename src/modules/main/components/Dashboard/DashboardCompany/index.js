import { Card } from 'commons/components/Card';
import TitleHeader from 'commons/components/TitleHeader';
import MainLayout from 'layout/MainLayout';
import comapyInverter from 'mockData/dashboardComany';
import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const DashboardCompany = () => {
  const [activePage, setActivePage] = useState(1);
  const perPage = 6;
  const totalPage = 100;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderInverter = comapyInverter.length ? (
    comapyInverter.map((item) => {
      const { id, nameComany, listInverter } = item;
      let hasEvent = false;
      listInverter.forEach((item1) => {
        if (item1?.isEvent) hasEvent = true;
      });
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
            {nameComany}
          </div>

          <div className="list-card-item ">
            {listInverter &&
              listInverter.map((inverterItem) => {
                const {
                  id: idInverter,
                  area,
                  listItem,
                  isEvent,
                } = inverterItem;

                return (
                  <Card
                    key={idInverter}
                    customClass="header-company"
                    isCardCompany
                    listItem={listItem}
                    title={area}
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
    <MainLayout>
      <div className="content-wrap">
        <TitleHeader
          title="설치 업체"
          subTitle="실증단지 내 설치된 업체들의 발전 데이터를 확인하실 수 있습니다."
        />

        <div className="list-company">{renderInverter}</div>

        <div className="opacity d-block pagination">
          {totalPage > perPage && (
            <div className="wrapper-device__pagination">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
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
