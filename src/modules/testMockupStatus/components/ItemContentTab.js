// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import { headTestMockupStatus } from './constant';
// import LineSeriesChart from './chart';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from './GroupActionDownload';

type Props = {
  listMockupDataCompany: any,
  powerData: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  performanceData: Object,
  insolationData: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  powerData,
  handleChangeSearch,
  performanceData,
  insolationData,
  paramsSearch,
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
        <div className="group-char-right">{/* <LineSeriesChart /> */}</div>
      </div>

      <TitleSubHeader title="발전 현황" />
      <GroupActionDownload
        linkDownTable={`generator/status?inverter_id=${paramsSearch?.company}`}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div>
        <Table
          tableHeads={headTestMockupStatus}
          tableBody={listMockupDataCompany}
          isShowId
        />
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);
