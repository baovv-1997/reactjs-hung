// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import {
  headTestSolarMonitoringOperationStatus,
  headTestMockupStatisticsOfModule,
} from '../constant';
// import LineSeriesChart from '../chart';
import Pagination from 'react-js-pagination';
import { Button } from 'commons/components/Button';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from './GroupActionDownload';

type Props = {
  listMockupDataCompany: any,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  dataTableBottom: Array<{
    id: number,
  }>,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataBoxContent,
  handleDownloadTrend,
  handleChangeSearch,
  paramsSearch,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  dataTableBottom,
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
      <BoxGroup dataBoxContent={dataBoxContent} />
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
        <div className="group-char-right">{/* <LineSeriesChart /> */}</div>
      </div>
      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        handleDownloadTrend={handleDownloadTrend}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div className="mb-4">
        <Table
          tableHeads={headTestSolarMonitoringOperationStatus}
          tableBody={listMockupDataCompany}
          isShowId
        />
        <div className="opacity d-block pagination">
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
      <TitleSubHeader title="모듈,외기 온도 / 일사량 통계" />
      <div className="group-option-table d-flex  justify-content-between mb-3">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <Button onClick={() => handleDownloadTrend('raw2')}>
            Raw Date 다운
          </Button>
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
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);
