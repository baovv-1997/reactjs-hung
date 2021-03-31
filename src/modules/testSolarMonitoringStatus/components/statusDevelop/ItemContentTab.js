// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import { headTestMockupStatus } from '../constant';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import { LineChart } from 'commons/components/LineChart/lineChart';

type Props = {
  listMockupDataCompany: any,
  powerData: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  performanceData: Object,
  insolationData: Object,
  dataChart: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  powerData,
  handleChangeSearch,
  performanceData,
  insolationData,
  paramsSearch,
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
          <LineChart
            dataChart={dataChart}
            unitLine1="kWh"
            unitLine2="W/㎡"
            unitLine3="%"
            optionLine={{
              line1: paramsSearch?.power,
              line2: paramsSearch?.insolation,
              line3: paramsSearch?.performance,
            }}
            showPoint3
            showPoint1
            showPoint2
          />
        </div>
      </div>
      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        linkDownTable={`generator/statistic?com_id=${paramsSearch?.company}`}
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
