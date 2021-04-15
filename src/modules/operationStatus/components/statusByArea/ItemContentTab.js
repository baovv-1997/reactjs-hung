// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import LineChart2 from 'commons/components/LineChart/LineChart2';

import IMAGES from 'themes/images';
import { headStatusCompany } from '../constants';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';

type Props = {
  rawData: any,
  dataBoxContent: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  activeTab: string,
  id: number,
  totalPage: number,
  chartData: Array,
  chartData: any,
  isProcessingRaw: boolean,
};

const ItemContentTab = ({
  rawData,
  dataBoxContent,
  handleChangeSearch,
  paramsSearch,
  activeTab,
  id,
  totalPage,
  chartData,
  isProcessingRaw,
}: Props) => {
  const dataLengthChart = [
    {
      id: 1,
      name: 'PV전압',
      color: '#8567b4',
    },
    {
      id: 2,
      name: 'PV전류',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '출력전류',
      color: '#fe8224',
    },
    {
      id: 4,
      name: '출력',
      color: '#ffcc00',
    },
    {
      id: 5,
      name: '출력전압',
      color: '#102a82',
    },
  ];

  return (
    <div className="content-wrap-tab">
      <BoxGroup
        dataBoxContent={dataBoxContent}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
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
            <LineChart2
              dataChart={chartData}
              unitLine1="V"
              unitLine2="A"
              unitLine3="A"
              unitLine4="kW"
              unitLine5="V"
              optionLine={{
                line1: paramsSearch?.PVVoltage,
                line2: paramsSearch?.PVCurrent,
                line3: paramsSearch?.outputVoltage,
                line4: paramsSearch?.outputCurrent,
                line5: paramsSearch?.print,
              }}
              typeLine="line"
              widthLine={2}
              unitLeft="V"
              unitRight="A"
              showPoint1
              showPoint2
              showPoint3
            />
          )}
        </div>
      </div>
      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        linkDownTable={`operator/status?pos_id=${paramsSearch?.posSelected}&com_id=${activeTab}`}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />

      <div>
        <Table
          tableHeads={headStatusCompany}
          tableBody={rawData}
          // isShowId
          isLoading={isProcessingRaw}
        />
        <div className="opacity d-block pagination mt-0 mb-3">
          {totalPage > paramsSearch?.pagination?.value && !isProcessingRaw && (
            <div className="wrapper-device__pagination mt-0">
              <Pagination
                activePage={paramsSearch?.page}
                itemsCountPerPage={paramsSearch?.pagination?.value}
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
