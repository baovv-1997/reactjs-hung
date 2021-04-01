// @flow
import React, { memo } from 'react';
import moment from 'moment';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { FilterSearch } from 'commons/components/FilterSearch';
import { listPaginationType } from 'constants/listKey';
import { operator_event_filter } from 'constants/optionCheckbox';
import {
  headStatusCompany,
  headOperationStatusByAreaCompany,
} from '../constant';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';
import LineChart2 from 'commons/components/LineChart/LineChart2';
import { CONTRACT_FORMAT_TIME_CHART } from 'constants/index';

type Props = {
  listMockupDataCompany: any,
  dataBoxContent: Object,
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
  dataChartOperation: Object,
  optionFilters: Object,
  timeDate: Object,
  handleClickDetail: Function,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataBoxContent,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  dataTableBottom,
  isShowModalSorting,
  handleChangeSearch,
  paramsSearch,
  dataChartOperation,
  optionFilters,
  timeDate,
  handleClickDetail,
}: Props) => {
  const dataLengthChart = [
    {
      id: 1,
      name: 'PV전압(V)',
      color: '#8567b4',
    },
    {
      id: 2,
      name: 'PV전류(A)',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '출력전류(A)',
      color: '#fe8224',
    },
    {
      id: 4,
      name: '출력(kW)',
      color: '#ffcc00',
    },
    {
      id: 5,
      name: '출력전압(V)',
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
        <div className="group-char-right">
          <LineChart2
            dataChart={dataChartOperation}
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
            type={CONTRACT_FORMAT_TIME_CHART[paramsSearch?.classification]}
          />
        </div>
      </div>

      <TitleSubHeader title="실시간 계측정보 통계" />
      <GroupActionDownload
        linkDownTable={`operator/statistic?inverter_id=${paramsSearch?.company}&type=${paramsSearch?.classification}&time_to=${timeDate?.to}&&time_from=${timeDate?.from}`}
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
          <ButtonDownExcel
            linkDownTable={`operator/event?inverter_id=${paramsSearch?.company}`}
            // TODO UPDATE
            // &type=${paramsSearch?.classification}&time_to=${timeDate?.to}&&time_from=${timeDate?.from}
            keyName="test_solar"
          />
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
        onClickRow={handleClickDetail}
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
