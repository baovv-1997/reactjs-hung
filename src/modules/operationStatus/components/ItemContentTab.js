// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import moment from 'moment';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import ROUTERS from 'constants/routers';
import { useHistory } from 'react-router-dom';
import LineSeriesChart from 'commons/components/LineChart';
import {
  headStatusCompany,
  headOperationStatusByAreaCompany,
} from './constants';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from './GroupActionDownload';
import {
  lineSeriesData1,
  lineSeriesData2,
  lineSeriesData3,
} from 'mockData/chart';

type Props = {
  listMockupDataCompany: any,
  dataContent: Object,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  tableOperationStatusByAreaCompany: Array<{
    id: number,
  }>,
  isShowModalSorting: boolean,
  handleClickDetail: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
  activeTab: string,
  id: string,
  dataChart: Array,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataContent,
  dataBoxContent,
  handleDownloadTrend,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  tableOperationStatusByAreaCompany,
  isShowModalSorting,
  handleClickDetail,
  handleChangeSearch,
  paramsSearch,
  activeTab,
  id,
  dataChart,
}: Props) => {
  console.log(dataContent);
  const history = useHistory();
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
        {activeTab === id && (
          <div className="group-char-right">
            <LineSeriesChart
              lineSeriesData1={
                dataChart[0] &&
                dataChart[0].map((item) => ({
                  time: moment(item.time).format('YYYY-MM-DD'),
                  value: item.value,
                }))
              }
              lineSeriesData2={
                dataChart[1] &&
                dataChart[1].map((item) => ({
                  time: moment(item.time).format('YYYY-MM-DD'),
                  value: item.value,
                }))
              }
              dataChart={dataChart}
              lineSeriesData3={
                dataChart[2] &&
                dataChart[2].map((item) => ({
                  time: moment(item.time).format('YYYY-MM-DD'),
                  value: item.value,
                }))
              }
            />
          </div>
        )}
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
        <div className="opacity d-block pagination mt-0 mb-3">
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

      {/*  Table Bottom */}
      <TitleSubHeader title="이벤트 현황" />
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
        tableHeads={headOperationStatusByAreaCompany}
        tableBody={tableOperationStatusByAreaCompany}
        // isShowId
        handleCheckboxSort={(option) => handleChangeSearch(option, 'checkBox')}
        handleShowModalSorting={() => handleChangeSearch('', 'modal')}
        showModalSort={{
          isShow: isShowModalSorting,
          keyItem: 5,
        }}
        onClickRow={handleClickDetail}
      />
      <div className="group-btn-register text-right">
        <Button
          onClick={() =>
            history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY_REGISTER)
          }
        >
          등록
        </Button>
      </div>
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
