import { Card } from 'commons/components/Card';
import Loading from 'commons/components/Loading';
import TitleHeader from 'commons/components/TitleHeader';
import ROUTERS from 'constants/routers';
// import MainLayout from 'layout/MainLayout';
import { handleGroupItem, spliceCompanyInverter } from 'helpers';
import { getListCompanyInverters, setCompanyId } from 'modules/main/redux';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import IMAGES from 'themes/images';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const DashboardCompany = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const handleCompanyClick = (id) => {
    history.push(ROUTERS.STATUS_COMPANY);
    dispatch(setCompanyId({ id }));
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
          onClick={() => handleCompanyClick(item[0].id)}
          role="presentation"
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
      <div className="content-wrap mh-50">
        <TitleHeader
          title="설치 업체"
          descSub="실증단지 내 설치된 업체들의 발전 데이터를 확인하실 수 있습니다."
        />
        {isLoading ? (
          <div className="mt-5 pt-5">
            <Loading />
          </div>
        ) : (
          <div className="list-company">{renderInverter}</div>
        )}
        <div className="opacity d-block pagination">
          {total > perPage && !isLoading && (
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
                  <img src={IMAGES.arrow_left} alt="" className="double-prev" />
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
    </>
  );
};

export default DashboardCompany;
