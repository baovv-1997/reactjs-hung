import { Card } from 'commons/components/Card';
import TitleHeader from 'commons/components/TitleHeader';
import { spliceCompanyInverter } from 'helpers';
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

  // slice if item inverter > column
  spliceCompanyInverter(comapyInverter);

  // render Inverter
  const renderInverter = comapyInverter.length ? (
    comapyInverter.map((item, index) => {
      const { id, nameComany, listInverter } = item;
      // get prev item
      const prevInverter = comapyInverter[index - 1];
      // get next item
      const nextInverter = comapyInverter[index + 1];

      let hasEvent = false;
      // check inverter have event?
      listInverter.forEach((item1) => {
        if (item1?.isEvent) hasEvent = true;
      });

      // check event if company have inverter has event
      if (id === prevInverter?.id) {
        prevInverter.listInverter.map((item2) => {
          if (item2.isEvent === true) hasEvent = true;
          return hasEvent;
        });
      }

      // check event if company have inverter has event
      if (id === nextInverter?.id) {
        nextInverter.listInverter.map((item2) => {
          if (item2.isEvent === true) hasEvent = true;
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
                    customClass="card-company"
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
          descSub="실증단지 내 설치된 업체들의 발전 데이터를 확인하실 수 있습니다."
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
