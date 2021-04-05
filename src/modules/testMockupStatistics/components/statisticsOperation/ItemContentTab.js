// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import { operator_event_filter } from 'constants/optionCheckbox';
import Pagination from 'react-js-pagination';
import { FilterSearch } from 'commons/components/FilterSearch';
import moment from 'moment';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';
import { CONTRACT_FORMAT_TIME_CHART } from 'constants/index';
import { LineChart } from 'commons/components/LineChart/lineChart';
import IMAGES from 'themes/images';
import GroupActionDownload from './GroupActionDownload';
import GroupCompareChart from './GroupCompareChart';
import BoxGroup from './BoxGroup';
import {
  headTestMockupOperationStatus,
  headTestMockupOperationStatistics,
} from '../constant';

type Props = {
  listMockupDataCompany: any,
  dataBoxContent: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  dataTableBottom: Array<{
    id: number,
  }>,
  isShowModalSorting: boolean,
  handleClickDetail: Function,
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
  optionFilters: any,
  timeDate: Object,
  dataChartOperation: Array<{}>,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataBoxContent,
  handleChangeSearch,
  paramsSearch,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  isShowModalSorting,
  handleClickDetail,
  listStatusCompanySelect,
  listInverter,
  dataTableBottom,
  optionFilters,
  timeDate,
  dataChartOperation,
}: Props) => {
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
        <div className="group-char-right">
          <LineChart
            dataChart={dataChartOperation}
            unitLine1="V"
            unitLine2="A"
            unitLine3="kW"
            optionLine={{
              line1: paramsSearch?.ACVoltage,
              line2: paramsSearch?.ACCurrent,
              line3: paramsSearch?.ACPower,
            }}
            showPoint3
            showPoint1
            showPoint2
            type={CONTRACT_FORMAT_TIME_CHART[paramsSearch?.classification]}
            unitLeft="V"
            unitRight="A"
            typeLine="line"
            widthLine={2}
          />
        </div>
      </div>
      <TitleSubHeader title="발전 통계" />
      <GroupActionDownload
        linkDownTable={`operator/statistic?inverter_id=${paramsSearch?.company}&type=${paramsSearch?.classification}&time_to=${timeDate?.to}&&time_from=${timeDate?.from}`}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div className="mb-4">
        <Table
          tableHeads={headTestMockupOperationStatus}
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
      <TitleSubHeader title="이벤트 통계" />
      <div className="group-option-table d-flex  justify-content-between">
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
            keyName="test_mockup"
          />
        </div>
      </div>

      <Table
        tableHeads={headTestMockupOperationStatistics}
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
        onClickRow={handleClickDetail}
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
                <img src={IMAGES.arrow_right1} alt="" className="double-prev" />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);
