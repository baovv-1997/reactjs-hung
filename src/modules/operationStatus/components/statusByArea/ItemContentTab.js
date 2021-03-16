// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import { headStatusCompany } from 'constants/headerTable';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';

type Props = {
  listMockupDataCompany: any,
  dataContent: Object,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataContent,
  dataBoxContent,
  handleDownloadTrend,
  handleChangeSearch,
  paramsSearch,
}: Props) => {
  console.log(dataContent);
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

      <div className="group-char">
        <div className="group-char-left">
          <GroupCompareChart
            paramsSearch={paramsSearch}
            handleChangeSearch={handleChangeSearch}
          />
          <div className="group-length-chart">
            <LengthChart dataLengthChart={dataLengthChart} />
          </div>
        </div>
        <div className="group-char-right">{/* Add  Chart */}</div>
      </div>
      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        handleDownloadTrend={handleDownloadTrend}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div>
        <Table
          tableHeads={headStatusCompany}
          tableBody={listMockupDataCompany}
          // isShowId
        />
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);
