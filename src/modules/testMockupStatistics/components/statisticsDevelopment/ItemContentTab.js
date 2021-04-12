// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType5PerPage } from 'constants/listKey';
import IMAGES from 'themes/images';
import FilterSearch from 'commons/components/FilterSearch';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';
import { LineChart } from 'commons/components/LineChart/lineChart';
import { CONTRACT_FORMAT_TIME_CHART } from 'constants/index';
import {
  headTestMockupStatistics,
  headTestMockupStatisticsOfModule,
} from '../constant';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';

type Props = {
  dataTableStatisticsCompany: any,
  dataBoxContent: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  handleChangeSearch: Function,
  paramsSearch: Object,
  dataTableBottom: Array<{}>,
  timeDate: Object,
  dataChart: any,
};

const ItemContentTab = ({
  dataTableStatisticsCompany,
  dataBoxContent,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  handleChangeSearch,
  paramsSearch,
  dataTableBottom,
  timeDate,
  dataChart,
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
          <LineChart
            dataChart={dataChart}
            unitLine1="kWh"
            unitLine2="W/㎡"
            unitLine3="%"
            optionLine={{
              line1: paramsSearch?.power,
              line2: paramsSearch?.insolation,
              line3: paramsSearch?.ratio,
            }}
            showPoint3
            type={CONTRACT_FORMAT_TIME_CHART[paramsSearch?.classification]}
          />
        </div>
      </div>
      <TitleSubHeader title="발전 통계" />
      <GroupActionDownload
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`operator/statistic?inverter_id=${paramsSearch?.company}&type=${paramsSearch?.classification}&time_to=${timeDate?.to}&&time_from=${timeDate?.from}`}
      />
      <div>
        <Table
          tableHeads={headTestMockupStatistics}
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

      {/*  Table Bottom */}
      <TitleSubHeader title="모듈,외기 온도 / 일사량 통계" />
      <div className="group-option-table d-flex  justify-content-between">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType5PerPage}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <ButtonDownExcel
            linkDownTable={`operator/statistic?inverter_id=${paramsSearch?.company}&type=${paramsSearch?.classification}&time_to=${timeDate?.to}&&time_from=${timeDate?.from}`}
            keyName="test_mockup"
          />
        </div>
      </div>
      <Table
        tableHeads={headTestMockupStatisticsOfModule}
        tableBody={dataTableBottom}
        isShowId
      />
      <div className="opacity d-block pagination mt-0">
        {totalPage2 > perPage2 && (
          <div className="wrapper-device__pagination mt-0">
            <Pagination
              activePage={paramsSearch?.page2}
              itemsCountPerPage={perPage2}
              totalItemsCount={totalPage2}
              pageRangeDisplayed={5}
              onChange={(e) => handleChangeSearch(e, 'page2')}
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
                <img src={IMAGES.arrow_right1} alt="" className="double-prev" />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);
