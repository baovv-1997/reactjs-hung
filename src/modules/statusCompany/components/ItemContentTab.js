// @flow
import React, { memo } from 'react';
import Pagination from 'react-js-pagination';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import LineChart from 'commons/components/LineChart/lineChart';
import IMAGES from 'themes/images';
import { headStatusByCompany } from './constants';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from './GroupActionDownload';

type Props = {
  rawData: any,
  powerData: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  performanceData: Object,
  insolationData: Object,
  totalRawData: number,
  activeTab: string,
  id: number,
  chartData: any,
};

const ItemContentTab = ({
  rawData,
  powerData,
  handleChangeSearch,
  performanceData,
  insolationData,
  paramsSearch,
  totalRawData,
  activeTab,
  id,
  chartData,
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
      <BoxGroup
        powerData={powerData}
        performanceData={performanceData}
        insolationData={insolationData}
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
                line1: paramsSearch?.power,
                line2: paramsSearch?.insolation,
                line3: paramsSearch?.performance,
              }}
              showPoint3
            />
          )}
        </div>
      </div>

      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`generator/statistic?com_id=${paramsSearch?.company}&inverter_id=${activeTab}`}
      />
      <div>
        <Table
          tableHeads={headStatusByCompany}
          tableBody={rawData}
          // isShowId
        />
        <div className="opacity d-block pagination mt-0">
          {totalRawData > paramsSearch?.pagination?.value && (
            <div className="wrapper-device__pagination mt-0">
              <Pagination
                activePage={paramsSearch?.page}
                itemsCountPerPage={paramsSearch?.pagination?.value}
                totalItemsCount={totalRawData}
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
