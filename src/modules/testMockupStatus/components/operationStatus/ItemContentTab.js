// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import {
  headTestMockupOperationStatus,
  headOperationStatusByAreaCompany,
} from '../constant';
import ROUTERS from 'constants/routers';
import Pagination from 'react-js-pagination';
import { Button } from 'commons/components/Button';
import { useHistory } from 'react-router-dom';
import LineSeriesChart from '../chart';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from './GroupActionDownload';

type Props = {
  listMockupDataCompany: any,
  dataContent: Object,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  tableOperationStatusByAreaCompany: Array<{
    id: number,
  }>,
  isShowModalSorting: boolean,
  handleClickDetail: Function,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataBoxContent,
  dataContent,
  handleDownloadTrend,
  handleChangeSearch,
  paramsSearch,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  tableOperationStatusByAreaCompany,
  isShowModalSorting,
  handleClickDetail,
}: Props) => {
  const history = useHistory();
  console.log(dataContent, 'dataContent', headTestMockupOperationStatus);
  const dataLengthChart = [
    {
      id: 1,
      name: 'AC전압(V)',
      color: '#8567b4',
    },
    {
      id: 2,
      name: 'AC전류(A)',
      color: '#c05e13',
    },
    {
      id: 3,
      name: 'AC전력(kW)',
      color: '#fe8224',
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
        <div className="group-char-right">
          <LineSeriesChart />
        </div>
      </div>
      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        handleDownloadTrend={handleDownloadTrend}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div className="mb-4">
        <Table
          tableHeads={headTestMockupOperationStatus}
          tableBody={listMockupDataCompany}
          // isShowId
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
      <TitleSubHeader title="테스트(목업) 운영 현황" />
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
            history.push(ROUTERS.TEST_MOCKUP_OPERATION_STATUS_REGISTER)
          }
        >
          등록
        </Button>
      </div>
      <div className="opacity d-block pagination mt-0">
        {totalPage > perPage && (
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
