// @flow
import React, { memo } from 'react';
import moment from 'moment';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import { operator_event_filter } from 'constants/optionCheckbox';
import {
  headStatusCompany,
  headOperationStatusByAreaCompany,
} from '../constant';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import { FilterSearch } from '../FilterSearch';

type Props = {
  listMockupDataCompany: any,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  dataTableBottom: Array<{
    id: number,
  }>,
  isShowModalSorting: boolean,
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
  dataChartOperation: Object,
  optionFilters: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataBoxContent,
  handleDownloadTrend,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  dataTableBottom,
  isShowModalSorting,
  handleChangeSearch,
  paramsSearch,
  listStatusCompanySelect,
  listInverter,
  dataChartOperation,
  optionFilters,
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
      <FilterSearch
        listStatusCompanySelect={listStatusCompanySelect}
        listInverter={listInverter}
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
        <div className="group-char-right">{/* Add  Chart */}</div>
      </div>

      <TitleSubHeader title="실시간 계측정보 통계" />
      <GroupActionDownload
        handleDownloadTrend={handleDownloadTrend}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div>
        <Table
          tableHeads={headStatusCompany}
          tableBody={listMockupDataCompany}
          isShowId
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
        tableBody={
          (dataTableBottom &&
            dataTableBottom.length > 0 &&
            dataTableBottom.map((event, index) => ({
              id: event?.id,
              rowId: `${
                totalPage2 - (paramsSearch?.page2 - 1) * perPage2 - index || ''
              }`,
              dateTime: moment(event?.created_at).format('YYYY-MM-DD hh:mm:ss'),
              comName: event?.com_name,
              inverterID: event?.ds_id,
              inverterName: event?.ds_name,
              contents: event?.evt_content,
            }))) ||
          []
        }
        isShowId
        handleCheckboxSort={(option) => handleChangeSearch(option, 'checkBox')}
        handleShowModalSorting={() => handleChangeSearch('', 'modal')}
        showModalSort={{
          isShow: isShowModalSorting,
          keyItem: 4,
        }}
        listOption={operator_event_filter}
        optionDefault={optionFilters}
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
