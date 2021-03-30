import { Card } from 'commons/components/Card';
import Loading from 'commons/components/Loading';
import TitleHeader from 'commons/components/TitleHeader';
// import MainLayout from 'layout/MainLayout';
import { handleGroupItem, spliceCompanyInverter } from 'helpers';
import { getListCompanyInverters } from 'modules/main/redux';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';

const DashboardCompany = () => {
  const dispatch = useDispatch();
  const { total, listCompanyInverters, perPage, isLoading } = useSelector(
    (state) => state?.main
  );

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(
      getListCompanyInverters({
        type: 'inverter',
        com_id: 0,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(
      getListCompanyInverters({
        type: 'inverter',
        com_id: 0,
        page: pageNumber,
      })
    );
  };

  // Group item if has company duplicate
  const newlistCompanyInverters = [];
  if (listCompanyInverters && listCompanyInverters.length) {
    handleGroupItem(listCompanyInverters, newlistCompanyInverters);
  }

  // splice if index > length
  spliceCompanyInverter(newlistCompanyInverters);

  // render list inverter Company
  const renderInverter =
    newlistCompanyInverters &&
    newlistCompanyInverters.map((item, index) => {
      // get prev item
      const prevInverter = newlistCompanyInverters[index - 1];
      // get next item
      const nextInverter = newlistCompanyInverters[index + 1];

      let hasEvent = false;
      // check inverter have event?
      item.forEach((inverterItem) => {
        if (inverterItem?.event) hasEvent = true;
      });

      // check event if company have inverter has event
      if (item[0].comId === (prevInverter && prevInverter[0]?.comId)) {
        // eslint-disable-next-line no-unused-expressions
        prevInverter &&
          prevInverter.map((inverter) => {
            if (inverter?.event) hasEvent = true;
            return hasEvent;
          });
      }

      if (item[0].comId === (nextInverter && nextInverter[0]?.comId)) {
        // eslint-disable-next-line no-unused-expressions
        nextInverter &&
          nextInverter.map((inverter) => {
            if (inverter?.event) hasEvent = true;
            return hasEvent;
          });
      }

      return (
        <div
          className={`company-item item-${item.length} ${
            hasEvent ? 'company-hasevent' : ''
          }`}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          <div
            className={`company-name ${
              hasEvent ? 'company-hasevent-title' : ''
            }`}
          >
            {item[0]?.comName}
          </div>

          <div className="list-card-item ">
            {item?.map((inverterItem) => {
              const {
                id,
                amountElectricDay,
                amountElectricMonth,
                cumulativeElectric,
                electricRealtime,
                event,
                name,
                ratePower,
              } = inverterItem;
              return (
                <Card
                  key={id}
                  customClass="card-company"
                  isCardCompany
                  amountElectricDay={amountElectricDay}
                  title={name}
                  amountElectricMonth={amountElectricMonth}
                  cumulativeElectric={cumulativeElectric}
                  electricRealtime={electricRealtime}
                  ratePower={ratePower}
                  isEvent={!!event}
                />
              );
            })}
          </div>
        </div>
      );
    });

  return (
    <>
      {isLoading && <Loading />}
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
    </>
  );
};

export default DashboardCompany;
