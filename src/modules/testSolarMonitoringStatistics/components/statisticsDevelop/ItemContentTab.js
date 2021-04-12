// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import IMAGES from 'themes/images';
import { headStatisticsCompany } from '../constant';
import FilterSearch from 'commons/components/FilterSearch';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import LineChart from 'commons/components/LineChart/lineChart';
import { CONTRACT_FORMAT_TIME_CHART } from 'constants/index';

type Props = {
  dataTableStatisticsCompany: any,
  dataBoxContent: Object,
  totalPage: number,
  perPage: number,
  handleChangeSearch: Function,
  paramsSearch: Object,
  dataChart: Object,
  timeDate: Object,
};

const ItemContentTab = ({
  dataTableStatisticsCompany,
  dataBoxContent,
  totalPage,
  perPage,
  handleChangeSearch,
  paramsSearch,
  dataChart,
  timeDate,
}: Props) => {
  const dataLengthChart = [
    {
      id: 1,
      name: '발전량(kWh)',
      color: '#8567b4',
    },
    {
      id: 2,
      name: '일사량(W/㎡)',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '성능비(%)',
      color: '#fe8224',
    },
  ];

  return (
    <div className="content-wrap-tab">
      <BoxGroup dataBoxContent={dataBoxContent} />
      <FilterSearch
        handleChangeSearch={handleChangeSearch}
        paramsSearch={paramsSearch}
      />
      <div className="group-char" id="groupChart">
        <div className="group-char-left">
          <GroupCompareChart
            paramsSearch={paramsSearch}
            handleChangeSearch={handleChangeSearch}
          />
          <div className="group-length-chart">
            <LengthChart dataLengthChart={dataLengthChart} />
          </div>
        </div>
        <div className="group-char-right">
          {dataChart && (
            <LineChart
              dataChart={dataChart}
              unitLine1="kWh"
              unitLine2="W/㎡"
              unitLine3="%"
              optionLine={{
                line1: paramsSearch?.insolation,
                line2: paramsSearch?.performance,
                line3: paramsSearch?.generation,
              }}
              unitRight="%"
              showPoint3
              type={CONTRACT_FORMAT_TIME_CHART[paramsSearch?.classification]}
            />
          )}
        </div>
      </div>
      <TitleSubHeader title="발전 통계" />
      <GroupActionDownload
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`operator/statistic?inverter_id=${paramsSearch?.company}&type=${paramsSearch?.classification}&time_to=${timeDate?.to}&&time_from=${timeDate?.from}`}
        text="Sampling Data다운"
      />
      <div>
        <Table
          tableHeads={headStatisticsCompany}
          tableBody={dataTableStatisticsCompany}
          isShowId
        />
        <div className="opacity d-block pagination mt-0">
          {totalPage > perPage && (
            <div className="wrapper-device__pagination mt-0">
              <Pagination
                activePage={paramsSearch?.page}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={(e) => handleChangeSearch(e, 'page')}
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
    </div>
  );
};

export default memo<Props>(ItemContentTab);
