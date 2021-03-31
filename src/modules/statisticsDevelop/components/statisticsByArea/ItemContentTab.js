// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import LineChart from 'commons/components/LineChart/lineChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import { headStatisticsCompany } from '../constant';
import FilterSearch from '../FilterSearch';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';

type Props = {
  rawData: any,
  dataBoxContent: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  listStatusCompanySelect: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listInverter: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  totalPage: number,
  perPage: number,
  handleSubmitSearch: Function,
  activeTab: boolean,
  dateTime: Object,
  chartData: any,
  id: string,
};

const ItemContentTab = ({
  rawData,
  dataBoxContent,
  handleChangeSearch,
  paramsSearch,
  totalPage,
  perPage,
  listStatusCompanySelect,
  listInverter,
  handleSubmitSearch,
  activeTab,
  dateTime,
  chartData,
  id,
}: Props) => {
  const dataLengthChart = [
    {
      id: 1,
      name: '발전량 kWh',
      color: '#8567b4',
    },
    {
      id: 2,
      name: '일사량 ℃',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '성능비 kWh/㎡·10초',
      color: '#fe8224',
    },
  ];
  return (
    <div className="content-wrap-tab">
      <BoxGroup dataBoxContent={dataBoxContent} />
      <FilterSearch
        listStatusCompanySelect={listStatusCompanySelect}
        listInverter={listInverter}
        handleChangeSearch={handleChangeSearch}
        paramsSearch={paramsSearch}
        listInverter1={listInverter}
        isShowDupInverter
        handleSubmitSearch={handleSubmitSearch}
        activeTab={activeTab}
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
          {activeTab === id.toString() && chartData && (
            <LineChart
              dataChart={chartData}
              unitLine1="kWh"
              unitLine2="W/㎡"
              unitLine3="%"
              optionLine={{
                line1: paramsSearch?.insolation,
                line2: paramsSearch?.performance,
                line3: paramsSearch?.generation,
              }}
              type="minute"
            />
          )}
        </div>
      </div>
      <TitleSubHeader title="발전 통계" />
      <GroupActionDownload
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`generator/statistic?inverter_id=${activeTab}&pos_id=${paramsSearch?.posSelected}&time_to=${dateTime?.to}&time_from=${dateTime?.from}&type=${paramsSearch?.classification}`}
      />
      <div>
        <Table
          tableHeads={headStatisticsCompany}
          tableBody={rawData}
          // isShowId
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
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);
